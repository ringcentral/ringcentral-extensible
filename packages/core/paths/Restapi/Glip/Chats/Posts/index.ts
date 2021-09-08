import {RestRequestConfig} from '../../../../../Rest';
import {
  ReadGlipPostsParameters,
  GlipPostsList,
  GlipPostPostBody,
  GlipPostInfo,
  GlipPatchPostBody,
} from '../../../../../definitions';
import Parent from '..';
import {RingCentral} from '../../../../..';

class Index {
  rc: RingCentral;
  parent: Parent;
  postId: string | null;

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
   * Returns a list of posts from the specified chat.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/glip/chats/{chatId}/posts
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   * User Permission: UnifiedAppDesktop
   */
  async list(
    queryParams?: ReadGlipPostsParameters,
    restRequestConfig?: RestRequestConfig
  ): Promise<GlipPostsList> {
    const r = await this.rc.get<GlipPostsList>(
      this.path(false),
      queryParams,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Creates a post in the chat specified in path. Any mention can be added within the `text` attribute of the request body in .md format - `![:Type](id)`, where `type` is one of (Person, Team, File, Note, Task, Event, Link, Card) and `id` is a unique identifier of the mentioned object of the specified type. Attachments of the following types (File, Card, Event, Note) can also be added to a post by passing type and ID of attachment(s) in request body.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/glip/chats/{chatId}/posts
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   * User Permission: UnifiedAppDesktop
   */
  async post(
    glipPostPostBody: GlipPostPostBody,
    restRequestConfig?: RestRequestConfig
  ): Promise<GlipPostInfo> {
    const r = await this.rc.post<GlipPostInfo>(
      this.path(false),
      glipPostPostBody,
      undefined,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Returns information about the specified post.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/glip/chats/{chatId}/posts/{postId}
   * Rate Limit Group: Light
   * App Permission: TeamMessaging
   * User Permission: UnifiedAppDesktop
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<GlipPostInfo> {
    if (this.postId === null) {
      throw new Error('postId must be specified.');
    }
    const r = await this.rc.get<GlipPostInfo>(
      this.path(),
      undefined,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Deletes the specified post from the chat.
   * HTTP Method: delete
   * Endpoint: /restapi/{apiVersion}/glip/chats/{chatId}/posts/{postId}
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   * User Permission: UnifiedAppDesktop
   */
  async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.postId === null) {
      throw new Error('postId must be specified.');
    }
    const r = await this.rc.delete<string>(
      this.path(),
      undefined,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Updates a specific post within a chat.
   * HTTP Method: patch
   * Endpoint: /restapi/{apiVersion}/glip/chats/{chatId}/posts/{postId}
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   * User Permission: UnifiedAppDesktop
   */
  async patch(
    glipPatchPostBody: GlipPatchPostBody,
    restRequestConfig?: RestRequestConfig
  ): Promise<GlipPostInfo> {
    if (this.postId === null) {
      throw new Error('postId must be specified.');
    }
    const r = await this.rc.patch<GlipPostInfo>(
      this.path(),
      glipPatchPostBody,
      undefined,
      restRequestConfig
    );
    return r.data;
  }
}
export default Index;
