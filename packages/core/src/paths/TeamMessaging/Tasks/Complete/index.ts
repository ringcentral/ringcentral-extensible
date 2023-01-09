import TMCompleteTaskRequest from '../../../../definitions/TMCompleteTaskRequest';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/complete`;
  }

  /**
   * Completes a task in the specified chat.
   * HTTP Method: post
   * Endpoint: /team-messaging/{version}/tasks/{taskId}/complete
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  async post(tMCompleteTaskRequest: TMCompleteTaskRequest, restRequestConfig?: RestRequestConfig): Promise<string> {
    const r = await this.rc.post<string>(this.path(), tMCompleteTaskRequest, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
