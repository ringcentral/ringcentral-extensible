import {RestRequestConfig} from '../../../../../Rest';
import {
  CallQueuePresence,
  CallQueueUpdatePresence,
} from '../../../../../definitions';
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
    return `${this.parent.path()}/presence`;
  }

  /**
   * Operation: Get Call Queue Presence
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/call-queues/{groupId}/presence
   */
  async get(config?: RestRequestConfig): Promise<CallQueuePresence> {
    const r = await this.rc.get<CallQueuePresence>(
      this.path(),
      undefined,
      config
    );
    return r.data;
  }

  /**
   * Operation: Update Call Queue Presence
   * Rate Limit Group: Medium
   * Http put /restapi/v1.0/account/{accountId}/call-queues/{groupId}/presence
   */
  async put(
    callQueueUpdatePresence: CallQueueUpdatePresence,
    config?: RestRequestConfig
  ): Promise<CallQueuePresence> {
    const r = await this.rc.put<CallQueuePresence>(
      this.path(),
      callQueueUpdatePresence,
      undefined,
      config
    );
    return r.data;
  }
}

export default Index;
