import Default from './Default';
import AssignedRolesResource from '../../../../../definitions/AssignedRolesResource';
import ListUserAssignedRolesParameters from '../../../../../definitions/ListUserAssignedRolesParameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/assigned-role`;
  }

  /**
   * Returns a list of roles assigned to the current extension.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/assigned-role
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: ReadExtensions
   */
  async get(queryParams?: ListUserAssignedRolesParameters, restRequestConfig?: RestRequestConfig): Promise<AssignedRolesResource> {
    const r = await this.rc.get<AssignedRolesResource>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }

  /**
   * Updates a list of roles assigned to the current user.
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/assigned-role
   * Rate Limit Group: Medium
   * App Permission: RoleManagement
   * User Permission: EditAssignedRoles
   */
  async put(assignedRolesResource: AssignedRolesResource, restRequestConfig?: RestRequestConfig): Promise<AssignedRolesResource> {
    const r = await this.rc.put<AssignedRolesResource>(this.path(), assignedRolesResource, undefined, restRequestConfig);
    return r.data;
  }

  default(): Default {
    return new Default(this);
  }
}
export default Index;
