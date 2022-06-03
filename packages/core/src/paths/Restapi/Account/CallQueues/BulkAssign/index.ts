import CallQueueBulkAssignResource from '../../../../../definitions/CallQueueBulkAssignResource';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/bulk-assign`;
  }

  /**
   * Updates a call queue group.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/call-queues/{groupId}/bulk-assign
   * Rate Limit Group: Heavy
   * App Permission: EditExtensions
   * User Permission: Groups
   */
  async post(callQueueBulkAssignResource: CallQueueBulkAssignResource, restRequestConfig?: RestRequestConfig): Promise<string> {
    const r = await this.rc.post<string>(this.path(), callQueueBulkAssignResource, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
