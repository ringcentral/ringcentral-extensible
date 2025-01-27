import RoleResource from "../../../../definitions/RoleResource.js";
import RolesCollectionResource from "../../../../definitions/RolesCollectionResource.js";
import ListStandardUserRoleParameters from "../../../../definitions/ListStandardUserRoleParameters.js";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../types.js";

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
   * Returns a list of standard user roles.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/dictionary/user-role
   * Rate Limit Group: Light
   */
  public async list(
    queryParams?: ListStandardUserRoleParameters,
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
   * Returns a standard user role by ID.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/dictionary/user-role/{roleId}
   * Rate Limit Group: Light
   */
  public async get(
    restRequestConfig?: RestRequestConfig,
  ): Promise<RoleResource> {
    if (this.roleId === null) {
      throw new Error("roleId must be specified.");
    }
    const r = await this.rc.get<RoleResource>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
