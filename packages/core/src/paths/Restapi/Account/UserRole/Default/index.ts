import { RestRequestConfig } from '../../../../../Rest';
import { DefaultUserRoleRequest } from '../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../..';

class Index {
  rc: RingCentral;

  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/default`;
  }

  /**
   * Returns account default user role.
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
   * Updates account default user role.
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
