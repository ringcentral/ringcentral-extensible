import CostCenterList from "../../../../../definitions/CostCenterList.js";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/cost-centers`;
  }
  /**
   * Returns the list of cost centers of the account specified in path.
   * HTTP Method: get
   * Endpoint: /restapi/v2/accounts/{accountId}/cost-centers
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: CostCenterManagement
   */
  public async get(
    restRequestConfig?: RestRequestConfig,
  ): Promise<CostCenterList> {
    const r = await this.rc.get<CostCenterList>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
