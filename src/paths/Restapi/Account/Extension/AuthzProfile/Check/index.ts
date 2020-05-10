import {RestRequestConfig} from '../../../../../../Rest';
import {
  AuthProfileCheckResource,
  CheckUserPermissionParameters,
} from '../../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../../..';

class Check {
  rc: RingCentral;
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
    queryParams?: CheckUserPermissionParameters,
    config?: RestRequestConfig
  ): Promise<AuthProfileCheckResource> {
    const r = await this.rc.get<AuthProfileCheckResource>(
      this.path(),
      queryParams,
      config
    );
    return r.data;
  }
}

export default Check;
