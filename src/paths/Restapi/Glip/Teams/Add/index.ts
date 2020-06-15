import {RestRequestConfig} from '../../../../../Rest';
import {GlipPostMembersListBody} from '../../../../../definitions';
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
    return `${this.parent.path()}/add`;
  }

  /**
   * Operation: Add Team Members
   * Rate Limit Group: Medium
   * Http post /restapi/v1.0/glip/teams/{chatId}/add
   */
  async post(
    glipPostMembersListBody: GlipPostMembersListBody,
    config?: RestRequestConfig
  ): Promise<string> {
    const r = await this.rc.post<string>(
      this.path(),
      glipPostMembersListBody,
      undefined,
      config
    );
    return r.data;
  }
}

export default Index;
