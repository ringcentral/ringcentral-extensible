import {GlipPostMembersIdsListBody} from '../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../..';

class Remove {
  rc: RingCentral;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/remove`;
  }

  /**
   * Operation: Remove Team Members
   * Rate Limit Group: Medium
   * Http post /restapi/v1.0/glip/teams/{chatId}/remove
   */
  async post(
    glipPostMembersIdsListBody: GlipPostMembersIdsListBody
  ): Promise<string> {
    const r = await this.rc.post<string>(
      this.path(),
      glipPostMembersIdsListBody
    );
    return r.data;
  }
}

export default Remove;
