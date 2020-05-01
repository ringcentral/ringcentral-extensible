import {CallQueueBulkAssignResource} from '../../../../../definitions';
import Parent from '..';
import RestClient from '../../../../..';

class BulkAssign {
  rc: RestClient;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/bulk-assign`;
  }

  /**
   * Operation: Assign Multiple Call Queue Members
   * Rate Limit Group: Heavy
   * Http post /restapi/v1.0/account/{accountId}/call-queues/{groupId}/bulk-assign
   */
  async post(
    callQueueBulkAssignResource: CallQueueBulkAssignResource
  ): Promise<string> {
    const r = await this.rc.post(this.path(), callQueueBulkAssignResource);
    return r.data;
  }
}

export default BulkAssign;
