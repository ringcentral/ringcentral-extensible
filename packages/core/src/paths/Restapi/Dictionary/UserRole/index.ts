import RoleResource from '../../../../definitions/RoleResource';
import RolesCollectionResource from '../../../../definitions/RolesCollectionResource';
import ListStandardUserRoleParameters from '../../../../definitions/ListStandardUserRoleParameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  roleId: string | null;

  constructor(parent: ParentInterface, roleId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.roleId = roleId;
  }

  path(withParameter = true): string {
    if (withParameter && this.roleId !== null) {
      return `${this.parent.path()}/user-role/${this.roleId}`;
    }
    return `${this.parent.path()}/user-role`;
  }

  /**
   * Returns a list of standard user roles.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/dictionary/user-role
   * Rate Limit Group: Light
   */
  async list(queryParams?: ListStandardUserRoleParameters, restRequestConfig?: RestRequestConfig): Promise<RolesCollectionResource> {
    const r = await this.rc.get<RolesCollectionResource>(this.path(false), queryParams, restRequestConfig);
    return r.data;
  }

  /**
   * Returns a standard user role by ID.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/dictionary/user-role/{roleId}
   * Rate Limit Group: Light
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<RoleResource> {
    if (this.roleId === null) {
      throw new Error('roleId must be specified.');
    }
    const r = await this.rc.get<RoleResource>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
