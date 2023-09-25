import type DefaultUserRoleRequest from '../../../../../definitions/DefaultUserRoleRequest';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }

  public path(): string {
    return `${this._parent.path()}/default`;
  }

  /**
   * Returns the default user role of the current account.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/user-role/default
   * Rate Limit Group: Light
   * App Permission: RoleManagement
   * User Permission: Roles
   */
  public async get(restRequestConfig?: RestRequestConfig): Promise<string> {
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
  public async put(
    defaultUserRoleRequest: DefaultUserRoleRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<string> {
    const r = await this.rc.put<string>(this.path(), defaultUserRoleRequest, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
