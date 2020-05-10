import {RestRequestConfig} from '../../../../Rest';
import {
  GlipPosts,
  ListGlipPostsParameters,
  GlipPostInfo,
  GlipCreatePost,
} from '../../../../definitions';
import Parent from '..';
import RingCentral from '../../../..';

class Posts {
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
   * Operation: Get Posts
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/glip/posts
   */
  async get(
    queryParams?: ListGlipPostsParameters,
    config?: RestRequestConfig
  ): Promise<GlipPosts> {
    const r = await this.rc.get<GlipPosts>(this.path(), queryParams, config);
    return r.data;
  }

  /**
   * Operation: Create Post
   * Rate Limit Group: Light
   * Http post /restapi/v1.0/glip/posts
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

export default Posts;
