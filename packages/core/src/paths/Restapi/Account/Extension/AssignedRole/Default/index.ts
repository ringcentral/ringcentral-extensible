import { RestRequestConfig } from '../../../../../../Rest';
import { AssignedRolesResource } from '../../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../../..';

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
