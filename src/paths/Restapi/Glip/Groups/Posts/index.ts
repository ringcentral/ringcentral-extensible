import {RestRequestConfig} from '../../../../../Rest';
import {GlipPostInfo, GlipCreatePost} from '../../../../../definitions';
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
    return `${this.parent.path()}/posts`;
  }

  /**
   * Operation: Create Post in Group
   * Rate Limit Group: Medium
   * Http post /restapi/v1.0/glip/groups/{groupId}/posts
   */
  async post(
    glipCreatePost: GlipCreatePost,
    config?: RestRequestConfig
  ): Promise<GlipPostInfo> {
    const r = await this.rc.post<GlipPostInfo>(
      this.path(),
      glipCreatePost,
      undefined,
      config
    );
    return r.data;
  }
}

export default Index;
