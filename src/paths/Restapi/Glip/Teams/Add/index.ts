import {GlipPostMembersListBody} from '../../../../../definitions';
import Parent from '..';
import RestClient from '../../../../..';

class Add {
  rc: RestClient;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/add`;
  }

  /**
   * Operation: Add Team Members
   * Rate Limit Group: Medium
   * Http post /restapi/v1.0/glip/teams/{chatId}/add
   */
  async post(
    glipPostMembersListBody: GlipPostMembersListBody
  ): Promise<string> {
    const r = await this.rc.post(this.path(), glipPostMembersListBody);
    return r.data;
  }
}

export default Add;
