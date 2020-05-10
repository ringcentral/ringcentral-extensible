import {RestRequestConfig} from '../../../../../Rest';
import {FederationResource} from '../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../..';

class Federation {
  rc: RingCentral;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/federation`;
  }

  /**
   * Operation: Get Account Federation
   * Rate Limit Group: Medium
   * Http get /restapi/v1.0/account/{accountId}/directory/federation
   */
  async get(config?: RestRequestConfig): Promise<FederationResource> {
    const r = await this.rc.get<FederationResource>(
      this.path(),
      undefined,
      config
    );
    return r.data;
  }
}

export default Federation;
