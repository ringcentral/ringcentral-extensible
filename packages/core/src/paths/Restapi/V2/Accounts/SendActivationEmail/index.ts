import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/send-activation-email`;
  }
  /**
   * Sends/resends activation email to the system user of unconfirmed account.
   * HTTP Method: post
   * Endpoint: /restapi/v2/accounts/{accountId}/send-activation-email
   * Rate Limit Group: Medium
   * App Permission: EditAccounts
   * User Permission: AccountAdministration
   */
  public async post(restRequestConfig?: RestRequestConfig): Promise<string> {
    const r = await this.rc.post<string>(this.path(), undefined, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
