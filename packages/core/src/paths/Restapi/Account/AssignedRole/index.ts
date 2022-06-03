import ExtensionWithRolesCollectionResource from '../../../../definitions/ExtensionWithRolesCollectionResource';
import ListAssignedRolesParameters from '../../../../definitions/ListAssignedRolesParameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

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
   * Returns the list of assigned roles for the current account.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/assigned-role
   * Rate Limit Group: Medium
   * App Permission: ReadAccounts
   * User Permission: ReadAssignedRoles
   */
  async get(queryParams?: ListAssignedRolesParameters, restRequestConfig?: RestRequestConfig): Promise<ExtensionWithRolesCollectionResource> {
    const r = await this.rc.get<ExtensionWithRolesCollectionResource>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;
