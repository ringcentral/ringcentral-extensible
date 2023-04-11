import DefaultUserRoleRequest from '../../../../../definitions/DefaultUserRoleRequest';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/default`;
  }

  /**
   * Returns the default user role of the current account.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/user-role/default
   * Rate Limit Group: Light
   * App Permission: RoleManagement
   * User Permission: Roles
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<string> {
    const r = await this.rc.get<string>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Updates the account default user role.
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/user-role/default
   * Rate Limit Group: Medium
   * App Permission: RoleManagement
   * User Permission: Roles
   */
  async put(defaultUserRoleRequest: DefaultUserRoleRequest, restRequestConfig?: RestRequestConfig): Promise<string> {
    const r = await this.rc.put<string>(this.path(), defaultUserRoleRequest, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
