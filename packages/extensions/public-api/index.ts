import {RingCentral} from '@rc-ex/core';
import SdkExtension from '@rc-ex/core/lib/SdkExtension';

import Restapi from './paths/Restapi';
import Scim from './paths/Scim';

declare module '@rc-ex/core' {
  interface RingCentral {
    restapi(apiVersion: string | null): Restapi;
    scim(version: string | null): Scim;
  }
}

class PublicApiExtension extends SdkExtension {
  constructor() {
    super();
  }

  async install(rc: RingCentral) {
    RingCentral.prototype.restapi = function (
      apiVersion: string | null = 'v1.0'
    ) {
      return new Restapi(rc, apiVersion);
    };
    RingCentral.prototype.scim = function (version: string | null = 'v2') {
      return new Scim(rc, version);
    };
  }
}

export default PublicApiExtension;
