import {
  AuthProfileCheckResource,
  CheckUserPermissionParameters,
} from '../../../../../../definitions';
import Parent from '..';
import RestClient from '../../../../../..';

class Check {
  rc: RestClient;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/check`;
  }

  /**
   * Operation: Check User Permission
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/authz-profile/check
   */
  async get(
    queryParams?: CheckUserPermissionParameters
  ): Promise<AuthProfileCheckResource> {
    const r = await this.rc.get(this.path(), queryParams);
    return r.data;
  }
}

export default Check;
