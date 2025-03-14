import RolesCollectionResource from "../../../../../definitions/RolesCollectionResource.js";
import ListOfAvailableForAssigningRolesParameters from "../../../../../definitions/ListOfAvailableForAssigningRolesParameters.js";
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
    return `${this._parent.path()}/assignable-roles`;
  }
  /**
   * Returns a list of roles which can be assigned to a given extension.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/assignable-roles
   * Rate Limit Group: Medium
   * App Permission: RoleManagement
   */
  public async get(
    queryParams?: ListOfAvailableForAssigningRolesParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<RolesCollectionResource> {
    const r = await this.rc.get<RolesCollectionResource>(
      this.path(),
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
