import RingCentral from '@rc-ex/core';
import SdkExtension from '@rc-ex/core/lib/SdkExtension';
import RestException from '@rc-ex/core/lib/RestException';
import axios from 'axios';
import URI from 'urijs';
import waitFor from 'wait-for-async';
import {RestResponse} from '@rc-ex/core/lib/Rest';

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
  rc!: RingCentral;
  options: DiscoveryOptions;

  initialDiscovery?: InitialDiscovery;

  constructor(options: DiscoveryOptions = {}) {
    super();
    this.options = options;
    this.options.discoveryServer ??= 'https://discovery.ringcentral.com';
    this.options.initialRetrySettings ??= {
      retryCount: 3,
      retryInterval: 3,
    };
  }

  async install(rc: RingCentral) {
    this.rc = rc;
  }

  async discover() {
    let uri = new URI(this.options.discoveryServer)
      .directory('/.well-known/entry-points/initial')
      .addQuery('clientId', this.rc.rest.clientId);
    if (this.options.brandId) {
      uri = uri.addQuery('brandId', this.options.brandId);
    }
    let retryCount = 0;
    // eslint-disable-next-line no-constant-condition
    while (true) {
      try {
        retryCount += 1;
        const r = await axios.get<InitialDiscovery>(uri.toString());
        this.initialDiscovery = r.data;
        this.rc.rest.server = this.initialDiscovery!.coreApi.baseUri;
        this.options.initialRetrySettings!.retryCount =
          this.initialDiscovery!.retryCount;
        this.options.initialRetrySettings!.retryInterval =
          this.initialDiscovery!.retryInterval;
        break;
      } catch (e) {
        const re = e as {response: RestResponse};
        if (re.response) {
          if (retryCount < this.options.initialRetrySettings!.retryCount) {
            await waitFor({
              interval: this.options.initialRetrySettings!.retryInterval * 1000,
            });
            continue;
          } else {
            throw new RestException(re.response);
          }
        }
        throw e;
      }
    }
  }
}

export default DiscoveryExtension;
