import BulkRoleAssignResource from '../../../../../definitions/BulkRoleAssignResource';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/bulk-assign`;
  }

  /**
   * Assigns multiple user roles.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/user-role/{roleId}/bulk-assign
   * Rate Limit Group: Heavy
   * App Permission: RoleManagement
   * User Permission: EditUserRoles
   */
  async post(bulkRoleAssignResource: BulkRoleAssignResource, restRequestConfig?: RestRequestConfig): Promise<string> {
    const r = await this.rc.post<string>(this.path(), bulkRoleAssignResource, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
