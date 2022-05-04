import { RestRequestConfig } from '../../../../../../Rest';
import { CheckUserPermissionParameters, AuthProfileCheckResource } from '../../../../../../definitions';
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
    return `${this.parent.path()}/check`;
  }

  /**
   * Checks if a certain user permission is activated for a particular extension.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/authz-profile/check
   * Rate Limit Group: Light
   */
  async get(queryParams?: CheckUserPermissionParameters, restRequestConfig?: RestRequestConfig): Promise<AuthProfileCheckResource> {
    const r = await this.rc.get<AuthProfileCheckResource>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;
