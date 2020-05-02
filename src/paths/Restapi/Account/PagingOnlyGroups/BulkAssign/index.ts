import {EditPagingGroupRequest} from '../../../../../definitions';
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
   * Operation: Assign Paging Group Users and Devices
   * Rate Limit Group: Heavy
   * Http post /restapi/v1.0/account/{accountId}/paging-only-groups/{pagingOnlyGroupId}/bulk-assign
   */
  async post(editPagingGroupRequest: EditPagingGroupRequest): Promise<string> {
    const r = await this.rc.post<string>(this.path(), editPagingGroupRequest);
    return r.data;
  }
}

export default BulkAssign;
