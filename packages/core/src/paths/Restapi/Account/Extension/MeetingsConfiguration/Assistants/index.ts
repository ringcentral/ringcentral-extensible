import AssistantsResource from '../../../../../../definitions/AssistantsResource';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/assistants`;
  }

  /**
   * Returns assistants information.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/meetings-configuration/assistants
   * Rate Limit Group: Light
   * App Permission: Meetings
   * User Permission: Meetings
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<AssistantsResource> {
    const r = await this.rc.get<AssistantsResource>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
