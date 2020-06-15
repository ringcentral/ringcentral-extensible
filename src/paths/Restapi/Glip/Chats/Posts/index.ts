import {RestRequestConfig} from '../../../../../Rest';
import {
  GlipPostsList,
  ReadGlipPostsParameters,
  GlipPostInfo,
  GlipPostPostBody,
  GlipPatchPostBody,
} from '../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../..';

class Index {
  rc: RingCentral;
  postId: string | null;
  parent: Parent;

  constructor(parent: Parent, postId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.postId = postId;
  }

  path(withParameter = true): string {
    if (withParameter && this.postId !== null) {
      return `${this.parent.path()}/posts/${this.postId}`;
    }

    return `${this.parent.path()}/posts`;
  }

  /**
   * Operation: Get Posts
   * Rate Limit Group: Medium
   * Http get /restapi/v1.0/glip/chats/{chatId}/posts
   */
  async list(
    queryParams?: ReadGlipPostsParameters,
    config?: RestRequestConfig
  ): Promise<GlipPostsList> {
    const r = await this.rc.get<GlipPostsList>(
      this.path(false),
      queryParams,
      config
    );
    return r.data;
  }

  /**
   * Operation: Create Post
   * Rate Limit Group: Medium
   * Http post /restapi/v1.0/glip/chats/{chatId}/posts
   */
  async post(
    glipPostPostBody: GlipPostPostBody,
    config?: RestRequestConfig
  ): Promise<GlipPostInfo> {
    const r = await this.rc.post<GlipPostInfo>(
      this.path(false),
      glipPostPostBody,
      undefined,
      config
    );
    return r.data;
  }

  /**
   * Operation: Get Post
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/glip/chats/{chatId}/posts/{postId}
   */
  async get(config?: RestRequestConfig): Promise<GlipPostInfo> {
    if (this.postId === null) {
      throw new Error('postId must be specified.');
    }

    const r = await this.rc.get<GlipPostInfo>(this.path(), undefined, config);
    return r.data;
  }

  /**
   * Operation: Update Post
   * Rate Limit Group: Medium
   * Http patch /restapi/v1.0/glip/chats/{chatId}/posts/{postId}
   */
  async patch(
    glipPatchPostBody: GlipPatchPostBody,
    config?: RestRequestConfig
  ): Promise<GlipPostInfo> {
    if (this.postId === null) {
      throw new Error('postId must be specified.');
    }

    const r = await this.rc.patch<GlipPostInfo>(
      this.path(),
      glipPatchPostBody,
      undefined,
      config
    );
    return r.data;
  }

  /**
   * Operation: Delete Post
   * Rate Limit Group: Medium
   * Http delete /restapi/v1.0/glip/chats/{chatId}/posts/{postId}
   */
  async delete(config?: RestRequestConfig): Promise<string> {
    if (this.postId === null) {
      throw new Error('postId must be specified.');
    }

    const r = await this.rc.delete<string>(this.path(), undefined, config);
    return r.data;
  }
}

export default Index;
