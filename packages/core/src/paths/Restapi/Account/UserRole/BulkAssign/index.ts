import type BulkRoleAssignResource from '../../../../../definitions/BulkRoleAssignResource';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }

  public path(): string {
    return `${this._parent.path()}/bulk-assign`;
  }

  /**
   * Assigns multiple user roles.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/user-role/{roleId}/bulk-assign
   * Rate Limit Group: Heavy
   * App Permission: RoleManagement
   * User Permission: EditUserRoles
   */
  public async post(
    bulkRoleAssignResource: BulkRoleAssignResource,
    restRequestConfig?: RestRequestConfig,
  ): Promise<string> {
    const r = await this.rc.post<string>(this.path(), bulkRoleAssignResource, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
