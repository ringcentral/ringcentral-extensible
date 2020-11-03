import RingCentral from '@rc-ex/core';
import SdkExtension from '@rc-ex/core/lib/SdkExtension';
import axios from 'axios';

export type DiscoveryOptions = {
  discoveryServer: string;
  brandId: string;
};

export type InitialEntryPoints = {
  version: string;
  retryCount: number;
  retryInterval: number;
  coreApi: {
    baseUri: string;
  };
};

class DiscoveryExtension extends SdkExtension {
  discoveryServer: string;
  brandId: string;
  rc!: RingCentral;
  initialEntryPoints?: InitialEntryPoints;

  constructor(options?: DiscoveryOptions) {
    super();
    this.discoveryServer =
      options?.discoveryServer ?? 'https://discovery.ringcentral.com';
    this.brandId = options?.brandId ?? '1210';
  }

  async install(rc: RingCentral) {
    this.rc = rc;
  }

  async discover() {
    const r = await axios.get(
      `${process.env.RINGCENTRAL_DISCOVERY_SERVER}/.well-known/entry-points/initial?clientId=${process.env.RINGCENTRAL_CLIENT_ID}`
    );
    this.initialEntryPoints = r.data;
    this.rc.rest.server = this.initialEntryPoints!.coreApi.baseUri;
  }
}

export default DiscoveryExtension;
