import {RestRequestConfig} from '../../../../../Rest';
import {CallQueueBulkAssignResource} from '../../../../../definitions';
import Parent from '..';
import {RingCentral} from '../../../../..';

class Index {
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
   * Updates a call queue group.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/call-queues/{groupId}/bulk-assign
   * Rate Limit Group: Heavy
   * App Permission: EditExtensions
   * User Permission: Groups
   */
  async post(
    callQueueBulkAssignResource: CallQueueBulkAssignResource,
    restRequestConfig?: RestRequestConfig
  ): Promise<string> {
    const r = await this.rc.post<string>(
      this.path(),
      callQueueBulkAssignResource,
      undefined,
      restRequestConfig
    );
    return r.data;
  }
}
export default Index;
