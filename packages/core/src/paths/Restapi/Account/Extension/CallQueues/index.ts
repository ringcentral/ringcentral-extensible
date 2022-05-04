import { RestRequestConfig } from '../../../../../Rest';
import { UserCallQueues } from '../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../..';

class Index {
  rc: RingCentral;

  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/call-queues`;
  }

  /**
   * Updates the list of call queues where the user is an agent. This is a full update request, which means that if any queue where the user is an agent is not mentioned in request, then the user is automatically removed from this queue.
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
