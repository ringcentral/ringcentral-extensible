import ExtensionWithRolesCollectionResource from "../../../../definitions/ExtensionWithRolesCollectionResource";
import ListAssignedRolesParameters from "../../../../definitions/ListAssignedRolesParameters";
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
    return `${this._parent.path()}/assigned-role`;
  }
  /**
   * Returns a list of roles assigned to the current account.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/assigned-role
   * Rate Limit Group: Medium
   * App Permission: ReadAccounts
   * User Permission: ReadAssignedRoles
   */
  public async get(
    queryParams?: ListAssignedRolesParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<ExtensionWithRolesCollectionResource> {
    const r = await this.rc.get<ExtensionWithRolesCollectionResource>(
      this.path(),
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
