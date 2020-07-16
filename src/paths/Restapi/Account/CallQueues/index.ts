import BulkAssign from './BulkAssign';
import Members from './Members';
import {RestRequestConfig} from '../../../../Rest';
import {CallQueues, ListCallQueuesParameters} from '../../../../definitions';
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
  async get(
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

  members(): Members {
    return new Members(this);
  }

  bulkAssign(): BulkAssign {
    return new BulkAssign(this);
  }
}

export default Index;
