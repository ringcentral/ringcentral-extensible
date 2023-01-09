import UserCallQueues from '../../../../../definitions/UserCallQueues';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/call-queues`;
  }

  /**
   * Updates a list of call queues where the user is an agent. This
 * is a full update request, which means that if any call queue where the user is
 * an agent is not mentioned in request, then the user is automatically removed
 * from this queue.
 *
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/call-queues
   * Rate Limit Group: Medium
   * App Permission: EditAccounts
   * User Permission: EditCallQueuePresence
   */
  async put(userCallQueues: UserCallQueues, restRequestConfig?: RestRequestConfig): Promise<UserCallQueues> {
    const r = await this.rc.put<UserCallQueues>(this.path(), userCallQueues, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
