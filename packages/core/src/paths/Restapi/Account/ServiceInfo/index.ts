import AccountServiceInfo from "../../../../definitions/AccountServiceInfo";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../types";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/service-info`;
  }
  /**
   * Returns the information about service plan, available features
   * and limitations for a particular RingCentral customer account.
   *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/service-info
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: ReadCompanyInfo
   */
  public async get(
    restRequestConfig?: RestRequestConfig,
  ): Promise<AccountServiceInfo> {
    const r = await this.rc.get<AccountServiceInfo>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
