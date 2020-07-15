import {RestRequestConfig} from '../../../../Rest';
import {
  AccountBusinessAddressResource,
  ModifyAccountBusinessAddressRequest,
} from '../../../../definitions';
import Parent from '..';
import RingCentral from '../../../..';

class Index {
  rc: RingCentral;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/business-address`;
  }

  /**
   * Operation: Get Account Business Address
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/business-address
   */
  async get(
    config?: RestRequestConfig
  ): Promise<AccountBusinessAddressResource> {
    const r = await this.rc.get<AccountBusinessAddressResource>(
      this.path(),
      undefined,
      config
    );
    return r.data;
  }

  /**
   * Operation: Update Company Business Address
   * Rate Limit Group: Medium
   * Http put /restapi/v1.0/account/{accountId}/business-address
   */
  async put(
    modifyAccountBusinessAddressRequest: ModifyAccountBusinessAddressRequest,
    config?: RestRequestConfig
  ): Promise<AccountBusinessAddressResource> {
    const r = await this.rc.put<AccountBusinessAddressResource>(
      this.path(),
      modifyAccountBusinessAddressRequest,
      undefined,
      config
    );
    return r.data;
  }
}

export default Index;
