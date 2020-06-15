import {RestRequestConfig} from '../../../../../Rest';
import {GlipGroupInfo, EditGroupRequest} from '../../../../../definitions';
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
   * Operation: Edit Group Members
   * Rate Limit Group: Medium
   * Http post /restapi/v1.0/glip/groups/{groupId}/bulk-assign
   */
  async post(
    editGroupRequest: EditGroupRequest,
    config?: RestRequestConfig
  ): Promise<GlipGroupInfo> {
    const r = await this.rc.post<GlipGroupInfo>(
      this.path(),
      editGroupRequest,
      undefined,
      config
    );
    return r.data;
  }
}

export default Index;
