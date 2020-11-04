import RingCentral from '@rc-ex/core';
import SdkExtension from '@rc-ex/core/lib/SdkExtension';
import RestException from '@rc-ex/core/lib/RestException';
import axios from 'axios';
import URI from 'urijs';
import waitFor from 'wait-for-async';

export type RetrySettings = {
  retryCount: number;
  retryInterval: number;
};

export type DiscoveryOptions = {
  discoveryServer?: string;
  brandId?: string;
  initialRetrySettings?: RetrySettings;
};

export type InitialDiscovery = {
  version: string;
  retryCount: number;
  retryInterval: number;
  discoveryApi: {
    defaultExternalUri: string;
  };
  authApi: {
    authorizationUri: string;
    oidcDiscoveryUri: string;
  };
  coreApi: {
    baseUri: string;
  };
};

class DiscoveryExtension extends SdkExtension {
  discoveryServer: string;
  brandId?: string;
  initialRetrySettings: RetrySettings;
  rc!: RingCentral;

  initialDiscovery?: InitialDiscovery;

  constructor(options?: DiscoveryOptions) {
    super();
    this.discoveryServer =
      options?.discoveryServer ?? 'https://discovery.ringcentral.com';
    this.brandId = options?.brandId;
    this.initialRetrySettings = options?.initialRetrySettings ?? {
      retryCount: 3,
      retryInterval: 3,
    };
  }

  async install(rc: RingCentral) {
    this.rc = rc;
  }

  async discover() {
    let uri = new URI(this.discoveryServer)
      .directory('/.well-known/entry-points/initial')
      .addQuery('clientId', this.rc.rest.clientId);
    if (this.brandId) {
      uri = uri.addQuery('brandId', this.brandId);
    }
    let retryCount = 0;
    // eslint-disable-next-line no-constant-condition
    while (true) {
      try {
        retryCount += 1;
        const r = await axios.get(uri.toString());
        this.initialDiscovery = r.data;
        this.rc.rest.server = this.initialDiscovery!.coreApi.baseUri;
        this.initialRetrySettings.retryCount = this.initialDiscovery!.retryCount;
        this.initialRetrySettings.retryInterval = this.initialDiscovery!.retryInterval;
        break;
      } catch (e) {
        if (e.response) {
          if (retryCount < this.initialRetrySettings.retryCount) {
            await waitFor({
              interval: this.initialRetrySettings.retryInterval * 1000,
            });
            continue;
          } else {
            throw new RestException(e.response);
          }
        }
        throw e;
      }
    }
  }
}

export default DiscoveryExtension;
