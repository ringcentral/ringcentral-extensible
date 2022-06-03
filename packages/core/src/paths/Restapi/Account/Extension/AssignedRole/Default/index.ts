import AssignedRolesResource from '../../../../../../definitions/AssignedRolesResource';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../../types';

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
   * Assigns the default role to the currently logged-in user extension.
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/assigned-role/default
   * Rate Limit Group: Medium
   * App Permission: RoleManagement
   * User Permission: Users
   */
  async put(restRequestConfig?: RestRequestConfig): Promise<AssignedRolesResource> {
    const r = await this.rc.put<AssignedRolesResource>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
