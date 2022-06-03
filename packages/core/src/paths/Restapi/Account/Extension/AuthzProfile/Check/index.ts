import AuthProfileCheckResource from '../../../../../../definitions/AuthProfileCheckResource';
import CheckUserPermissionParameters from '../../../../../../definitions/CheckUserPermissionParameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
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
