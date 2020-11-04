import RingCentral from '@rc-ex/core';
import SdkExtension from '@rc-ex/core/lib/SdkExtension';
import axios from 'axios';
import URI from 'urijs';

export type DiscoveryOptions = {
  discoveryServer?: string;
  brandId?: string;
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
  rc!: RingCentral;
  initialDiscovery?: InitialDiscovery;

  constructor(options?: DiscoveryOptions) {
    super();
    this.discoveryServer =
      options?.discoveryServer ?? 'https://discovery.ringcentral.com';
    this.brandId = options?.brandId;
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
    const r = await axios.get(uri.toString());
    this.initialDiscovery = r.data;
    this.rc.rest.server = this.initialDiscovery!.coreApi.baseUri;
  }
}

export default DiscoveryExtension;
