import Default from "./Default/index.js";
import AssignedRolesResource from "../../../../../definitions/AssignedRolesResource.js";
import ListUserAssignedRolesParameters from "../../../../../definitions/ListUserAssignedRolesParameters.js";
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
    return `${this._parent.path()}/assigned-role`;
  }
  /**
   * Returns a list of roles assigned to the current extension.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/assigned-role
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: ReadAssignedRoles
   */
  public async get(
    queryParams?: ListUserAssignedRolesParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<AssignedRolesResource> {
    const r = await this.rc.get<AssignedRolesResource>(
      this.path(),
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Updates a list of roles assigned to the current user.
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/assigned-role
   * Rate Limit Group: Medium
   * App Permission: RoleManagement
   * User Permission: EditAssignedRoles
   */
  public async put(
    assignedRolesResource: AssignedRolesResource,
    restRequestConfig?: RestRequestConfig,
  ): Promise<AssignedRolesResource> {
    const r = await this.rc.put<AssignedRolesResource>(
      this.path(),
      assignedRolesResource,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  public default(): Default {
    return new Default(this);
  }
}
export default Index;
