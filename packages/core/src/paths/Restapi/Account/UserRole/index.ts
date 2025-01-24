import BulkAssign from "./BulkAssign";
import Default from "./Default";
import type DeleteCustomRoleParameters from "../../../../definitions/DeleteCustomRoleParameters";
import type ReadUserRoleParameters from "../../../../definitions/ReadUserRoleParameters";
import type RoleResource from "../../../../definitions/RoleResource";
import type RolesCollectionResource from "../../../../definitions/RolesCollectionResource";
import type ListUserRolesParameters from "../../../../definitions/ListUserRolesParameters";
import type {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../types";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public roleId: string | null;

  public constructor(_parent: ParentInterface, roleId: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.roleId = roleId;
  }
  public path(withParameter = true): string {
    if (withParameter && this.roleId !== null) {
      return `${this._parent.path()}/user-role/${this.roleId}`;
    }
    return `${this._parent.path()}/user-role`;
  }
  /**
   * Returns a list of account user roles.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/user-role
   * Rate Limit Group: Medium
   * App Permission: ReadAccounts
   * User Permission: ReadUserRoles
   */
  public async list(
    queryParams?: ListUserRolesParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<RolesCollectionResource> {
    const r = await this.rc.get<RolesCollectionResource>(
      this.path(false),
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Creates a custom user role.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/user-role
   * Rate Limit Group: Medium
   * App Permission: RoleManagement
   * User Permission: EditUserRoles
   */
  public async post(
    roleResource: RoleResource,
    restRequestConfig?: RestRequestConfig,
  ): Promise<string> {
    const r = await this.rc.post<string>(
      this.path(false),
      roleResource,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Returns a user role assigned to the current account.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/user-role/{roleId}
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: ReadUserRoles
   */
  public async get(
    queryParams?: ReadUserRoleParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<RoleResource> {
    if (this.roleId === null) {
      throw new Error("roleId must be specified.");
    }
    const r = await this.rc.get<RoleResource>(
      this.path(),
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Updates a user role assigned to the current account by ID.
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/user-role/{roleId}
   * Rate Limit Group: Medium
   * App Permission: RoleManagement
   * User Permission: EditUserRoles
   */
  public async put(
    roleResource: RoleResource,
    restRequestConfig?: RestRequestConfig,
  ): Promise<RoleResource> {
    if (this.roleId === null) {
      throw new Error("roleId must be specified.");
    }
    const r = await this.rc.put<RoleResource>(
      this.path(),
      roleResource,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Deletes a custom user role by ID.
   * HTTP Method: delete
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/user-role/{roleId}
   * Rate Limit Group: Medium
   * App Permission: RoleManagement
   * User Permission: EditUserRoles
   */
  public async delete(
    queryParams?: DeleteCustomRoleParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<string> {
    if (this.roleId === null) {
      throw new Error("roleId must be specified.");
    }
    const r = await this.rc.delete<string>(
      this.path(),
      {},
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }

  public default(): Default {
    return new Default(this);
  }

  public bulkAssign(): BulkAssign {
    return new BulkAssign(this);
  }
}
export default Index;
