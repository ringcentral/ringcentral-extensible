import {RestRequestConfig} from '../../../../../Rest';
import {CallQueueBulkAssignResource} from '../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../..';

class BulkAssign {
  rc: RingCentral;
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
    callQueueBulkAssignResource: CallQueueBulkAssignResource,
    config?: RestRequestConfig
  ): Promise<string> {
    const r = await this.rc.post<string>(
      this.path(),
      callQueueBulkAssignResource,
      undefined,
      config
    );
    return r.data;
  }
}

export default BulkAssign;
