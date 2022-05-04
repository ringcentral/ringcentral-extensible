import { RestRequestConfig } from '../../../../Rest';
import { ListStandardUserRoleParameters, RolesCollectionResource, RoleResource } from '../../../../definitions';
import Parent from '..';
import RingCentral from '../../../..';

class Index {
  rc: RingCentral;

  parent: Parent;

  roleId: string | null;

  constructor(parent: Parent, roleId: string | null = null) {
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
   * Get Standard User Role List
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/dictionary/user-role
   * Rate Limit Group: Light
   */
  async list(queryParams?: ListStandardUserRoleParameters, restRequestConfig?: RestRequestConfig): Promise<RolesCollectionResource> {
    const r = await this.rc.get<RolesCollectionResource>(this.path(false), queryParams, restRequestConfig);
    return r.data;
  }

  /**
   * Returns standard user role.
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
