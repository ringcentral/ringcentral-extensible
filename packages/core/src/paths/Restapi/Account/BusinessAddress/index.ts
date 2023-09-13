import ModifyAccountBusinessAddressRequest from '../../../../definitions/ModifyAccountBusinessAddressRequest';
import AccountBusinessAddressResource from '../../../../definitions/AccountBusinessAddressResource';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }

  public path(): string {
    return `${this._parent.path()}/business-address`;
  }

  /**
   * Returns business address of a company.
 *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/business-address
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: ReadCompanyInfo
   */
  public async get(restRequestConfig?: RestRequestConfig): Promise<AccountBusinessAddressResource> {
    const r = await this.rc.get<AccountBusinessAddressResource>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Updates the business address of a company that account is linked
 * to. Batch request is supported.
 *
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/business-address
   * Rate Limit Group: Medium
   * App Permission: EditAccounts
   * User Permission: EditCompanyInfo
   */
  public async put(modifyAccountBusinessAddressRequest: ModifyAccountBusinessAddressRequest, restRequestConfig?: RestRequestConfig): Promise<AccountBusinessAddressResource> {
    const r = await this.rc.put<AccountBusinessAddressResource>(this.path(), modifyAccountBusinessAddressRequest, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
