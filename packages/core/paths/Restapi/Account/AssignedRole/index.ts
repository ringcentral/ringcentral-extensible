import {RestRequestConfig} from '../../../../Rest';
import {
  ListAssignedRolesParameters,
  ExtensionWithRolesCollectionResource,
} from '../../../../definitions';
import Parent from '..';
import {RingCentral} from '../../../..';

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
   * Returns the list of assigned roles for the current account.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/assigned-role
   * Rate Limit Group: Medium
   * App Permission: ReadAccounts
   * User Permission: ReadAssignedRoles
   */
  async get(
    queryParams?: ListAssignedRolesParameters,
    restRequestConfig?: RestRequestConfig
  ): Promise<ExtensionWithRolesCollectionResource> {
    const r = await this.rc.get<ExtensionWithRolesCollectionResource>(
      this.path(),
      queryParams,
      restRequestConfig
    );
    return r.data;
  }
}
export default Index;
