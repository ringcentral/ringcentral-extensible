import AssistedUsersResource from '../../../../../../definitions/AssistedUsersResource';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/assisted`;
  }

  /**
   * Returns assisted users information.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/meetings-configuration/assisted
   * Rate Limit Group: Light
   * App Permission: Meetings
   * User Permission: Meetings
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<AssistedUsersResource> {
    const r = await this.rc.get<AssistedUsersResource>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
