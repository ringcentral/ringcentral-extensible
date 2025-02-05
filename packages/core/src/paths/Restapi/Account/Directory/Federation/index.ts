import FederationResource from "../../../../../definitions/FederationResource.js";
import ReadDirectoryFederationParameters from "../../../../../definitions/ReadDirectoryFederationParameters.js";
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
    return `${this._parent.path()}/federation`;
  }
  /**
   * Returns information on a federation and associated accounts.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/directory/federation
   * Rate Limit Group: Medium
   * App Permission: ReadAccounts
   * User Permission: ReadCompanyInfo
   */
  public async get(
    queryParams?: ReadDirectoryFederationParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<FederationResource> {
    const r = await this.rc.get<FederationResource>(
      this.path(),
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
