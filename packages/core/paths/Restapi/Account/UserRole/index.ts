import BulkAssign from './BulkAssign';
import Default from './Default';
import {RestRequestConfig} from '../../../../Rest';
import {
  ListUserRolesParameters,
  RolesCollectionResource,
  RoleResource,
  DeleteCustomRoleParameters,
} from '../../../../definitions';
import Parent from '..';
import {RingCentral} from '../../../..';

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
   * Returns the list of account user roles.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/user-role
   * Rate Limit Group: Medium
   * App Permission: ReadAccounts
   * User Permission: ReadUserRoles
   */
  async list(
    queryParams?: ListUserRolesParameters,
    restRequestConfig?: RestRequestConfig
  ): Promise<RolesCollectionResource> {
    const r = await this.rc.get<RolesCollectionResource>(
      this.path(false),
      queryParams,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Creates custom user role.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/user-role
   * Rate Limit Group: Medium
   * App Permission: RoleManagement
   * User Permission: EditUserRoles
   */
  async post(
    roleResource: RoleResource,
    restRequestConfig?: RestRequestConfig
  ): Promise<string> {
    const r = await this.rc.post<string>(
      this.path(false),
      roleResource,
      undefined,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Returns a user role on the current account by ID.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/user-role/{roleId}
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: ReadUserRoles
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<RoleResource> {
    if (this.roleId === null) {
      throw new Error('roleId must be specified.');
    }
    const r = await this.rc.get<RoleResource>(
      this.path(),
      undefined,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Updates a user role on the current account by ID.
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/user-role/{roleId}
   * Rate Limit Group: Medium
   * App Permission: RoleManagement
   * User Permission: EditUserRoles
   */
  async put(
    roleResource: RoleResource,
    restRequestConfig?: RestRequestConfig
  ): Promise<string> {
    if (this.roleId === null) {
      throw new Error('roleId must be specified.');
    }
    const r = await this.rc.put<string>(
      this.path(),
      roleResource,
      undefined,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Deletes custom user role by ID.
   * HTTP Method: delete
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/user-role/{roleId}
   * Rate Limit Group: Medium
   * App Permission: RoleManagement
   * User Permission: EditUserRoles
   */
  async delete(
    queryParams?: DeleteCustomRoleParameters,
    restRequestConfig?: RestRequestConfig
  ): Promise<string> {
    if (this.roleId === null) {
      throw new Error('roleId must be specified.');
    }
    const r = await this.rc.delete<string>(
      this.path(),
      queryParams,
      restRequestConfig
    );
    return r.data;
  }

  default(): Default {
    return new Default(this);
  }

  bulkAssign(): BulkAssign {
    return new BulkAssign(this);
  }
}
export default Index;
