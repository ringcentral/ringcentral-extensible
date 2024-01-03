import type AssignedRolesResource from '../../../../../../definitions/AssignedRolesResource';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../../types';

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
   * Assigns the default role to the currently logged-in user extension.
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/assigned-role/default
   * Rate Limit Group: Medium
   * App Permission: RoleManagement
   * User Permission: Users
   */
  public async put(restRequestConfig?: RestRequestConfig): Promise<AssignedRolesResource> {
    const r = await this.rc.put<AssignedRolesResource>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
