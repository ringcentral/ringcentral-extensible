import type CallQueueBulkAssignResource from '../../../../../definitions/CallQueueBulkAssignResource';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }

  public path(): string {
    return `${this._parent.path()}/bulk-assign`;
  }

  /**
   * Assigns multiple call queue members to call queue group.
   *
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/call-queues/{groupId}/bulk-assign
   * Rate Limit Group: Heavy
   * App Permission: EditExtensions
   * User Permission: Groups
   */
  public async post(
    callQueueBulkAssignResource: CallQueueBulkAssignResource,
    restRequestConfig?: RestRequestConfig,
  ): Promise<string> {
    const r = await this.rc.post<string>(this.path(), callQueueBulkAssignResource, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
