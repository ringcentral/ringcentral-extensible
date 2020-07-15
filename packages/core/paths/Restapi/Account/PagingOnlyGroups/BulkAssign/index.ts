import {RestRequestConfig} from '../../../../../Rest';
import {EditPagingGroupRequest} from '../../../../../definitions';
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
    return `${this.parent.path()}/bulk-assign`;
  }

  /**
   * Operation: Assign Paging Group Users and Devices
   * Rate Limit Group: Heavy
   * Http post /restapi/v1.0/account/{accountId}/paging-only-groups/{pagingOnlyGroupId}/bulk-assign
   */
  async post(
    editPagingGroupRequest: EditPagingGroupRequest,
    config?: RestRequestConfig
  ): Promise<string> {
    const r = await this.rc.post<string>(
      this.path(),
      editPagingGroupRequest,
      undefined,
      config
    );
    return r.data;
  }
}

export default Index;
