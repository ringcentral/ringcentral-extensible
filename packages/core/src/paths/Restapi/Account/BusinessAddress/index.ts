import { RestRequestConfig } from '../../../../Rest';
import { AccountBusinessAddressResource, ModifyAccountBusinessAddressRequest } from '../../../../definitions';
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
   * Returns business address of a company.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/business-address
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: ReadCompanyInfo
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<AccountBusinessAddressResource> {
    const r = await this.rc.get<AccountBusinessAddressResource>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Updates the business address of a company that account is linked to. Batch request is supported.
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/business-address
   * Rate Limit Group: Medium
   * App Permission: EditAccounts
   * User Permission: EditCompanyInfo
   */
  async put(modifyAccountBusinessAddressRequest: ModifyAccountBusinessAddressRequest, restRequestConfig?: RestRequestConfig): Promise<AccountBusinessAddressResource> {
    const r = await this.rc.put<AccountBusinessAddressResource>(this.path(), modifyAccountBusinessAddressRequest, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
