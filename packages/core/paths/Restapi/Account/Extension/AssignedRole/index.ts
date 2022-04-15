import Default from './Default';
import { RestRequestConfig } from '../../../../../Rest';
import {
  ListUserAssignedRolesParameters,
  AssignedRolesResource,
} from '../../../../../definitions';
import Parent from '..';
import { RingCentral } from '../../../../..';

class Index {
  rc: RingCentral;

  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/assigned-role`;
  }

  /**
   * Returns the list of roles assigned to the current extension.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/assigned-role
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: ReadExtensions
   */
  async get(
    queryParams?: ListUserAssignedRolesParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<AssignedRolesResource> {
    const r = await this.rc.get<AssignedRolesResource>(
      this.path(),
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Updates the list of assigned roles for the current user.
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/assigned-role
   * Rate Limit Group: Medium
   * App Permission: RoleManagement
   */
  async put(
    assignedRolesResource: AssignedRolesResource,
    restRequestConfig?: RestRequestConfig,
  ): Promise<AssignedRolesResource> {
    const r = await this.rc.put<AssignedRolesResource>(
      this.path(),
      assignedRolesResource,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  default(): Default {
    return new Default(this);
  }
}
export default Index;
