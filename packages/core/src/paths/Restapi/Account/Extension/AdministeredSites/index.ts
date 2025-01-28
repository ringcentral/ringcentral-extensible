import BusinessSiteCollectionRequest from "../../../../../definitions/BusinessSiteCollectionRequest";
import BusinessSiteCollectionResource from "../../../../../definitions/BusinessSiteCollectionResource";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../types";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/administered-sites`;
  }
  /**
   * Returns a list of sites administered by the current user.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/administered-sites
   * Rate Limit Group: Medium
   * App Permission: ReadAccounts
   * User Permission: ReadExtensions
   */
  public async get(
    restRequestConfig?: RestRequestConfig,
  ): Promise<BusinessSiteCollectionResource> {
    const r = await this.rc.get<BusinessSiteCollectionResource>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Updates the sites administered by the current user.
   * Please note: Only IDs of records are used for update.
   *
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/administered-sites
   * Rate Limit Group: Medium
   * App Permission: EditAccounts
   * User Permission: EditAssignedRoles
   */
  public async put(
    businessSiteCollectionRequest: BusinessSiteCollectionRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<BusinessSiteCollectionResource> {
    const r = await this.rc.put<BusinessSiteCollectionResource>(
      this.path(),
      businessSiteCollectionRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
