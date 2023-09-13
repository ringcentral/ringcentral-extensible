import CallQueueUpdatePresence from '../../../../../definitions/CallQueueUpdatePresence';
import CallQueuePresence from '../../../../../definitions/CallQueuePresence';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }

  public path(): string {
    return `${this._parent.path()}/presence`;
  }

  /**
   * Returns presence status of the call queue members.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/call-queues/{groupId}/presence
   * Rate Limit Group: Light
   * App Permission: ReadPresence
   */
  public async get(restRequestConfig?: RestRequestConfig): Promise<CallQueuePresence> {
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
  public async put(callQueueUpdatePresence: CallQueueUpdatePresence, restRequestConfig?: RestRequestConfig): Promise<CallQueuePresence> {
    const r = await this.rc.put<CallQueuePresence>(this.path(), callQueueUpdatePresence, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
