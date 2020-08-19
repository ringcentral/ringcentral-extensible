import BulkAssign from './BulkAssign';
import Members from './Members';
import Presence from './Presence';
import {RestRequestConfig} from '../../../../Rest';
import {
  CallQueues,
  ListCallQueuesParameters,
  CallQueueDetails,
  CallQueueUpdateDetails,
} from '../../../../definitions';
import Parent from '..';
import RingCentral from '../../../..';

class Index {
  rc: RingCentral;
  groupId: string | null;
  parent: Parent;

  constructor(parent: Parent, groupId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.groupId = groupId;
  }

  path(withParameter = true): string {
    if (withParameter && this.groupId !== null) {
      return `${this.parent.path()}/call-queues/${this.groupId}`;
    }

    return `${this.parent.path()}/call-queues`;
  }

  /**
   * Operation: Get Call Queue List
   * Rate Limit Group: Medium
   * Http get /restapi/v1.0/account/{accountId}/call-queues
   */
  async list(
    queryParams?: ListCallQueuesParameters,
    config?: RestRequestConfig
  ): Promise<CallQueues> {
    const r = await this.rc.get<CallQueues>(
      this.path(false),
      queryParams,
      config
    );
    return r.data;
  }

  /**
   * Operation: Get Call Queue
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/call-queues/{groupId}
   */
  async get(config?: RestRequestConfig): Promise<CallQueueDetails> {
    if (this.groupId === null) {
      throw new Error('groupId must be specified.');
    }

    const r = await this.rc.get<CallQueueDetails>(
      this.path(),
      undefined,
      config
    );
    return r.data;
  }

  /**
   * Operation: Update Call Queue
   * Rate Limit Group: Light
   * Http put /restapi/v1.0/account/{accountId}/call-queues/{groupId}
   */
  async put(
    callQueueUpdateDetails: CallQueueUpdateDetails,
    config?: RestRequestConfig
  ): Promise<CallQueueDetails> {
    if (this.groupId === null) {
      throw new Error('groupId must be specified.');
    }

    const r = await this.rc.put<CallQueueDetails>(
      this.path(),
      callQueueUpdateDetails,
      undefined,
      config
    );
    return r.data;
  }

  presence(): Presence {
    return new Presence(this);
  }

  members(): Members {
    return new Members(this);
  }

  bulkAssign(): BulkAssign {
    return new BulkAssign(this);
  }
}

export default Index;
