import CallQueueUpdatePresence from '../../../../../definitions/CallQueueUpdatePresence';
import CallQueuePresence from '../../../../../definitions/CallQueuePresence';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/presence`;
  }

  /**
   * Returns presence status of the call queue members.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/call-queues/{groupId}/presence
   * Rate Limit Group: Light
   * App Permission: ReadPresence
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<CallQueuePresence> {
    const r = await this.rc.get<CallQueuePresence>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Updates presence status of the call queue members in the specified queue.
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/call-queues/{groupId}/presence
   * Rate Limit Group: Medium
   * App Permission: EditPresence
   */
  async put(callQueueUpdatePresence: CallQueueUpdatePresence, restRequestConfig?: RestRequestConfig): Promise<CallQueuePresence> {
    const r = await this.rc.put<CallQueuePresence>(this.path(), callQueueUpdatePresence, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
