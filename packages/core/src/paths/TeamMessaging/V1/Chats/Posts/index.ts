import TMUpdatePostRequest from '../../../../../definitions/TMUpdatePostRequest';
import TMPostInfo from '../../../../../definitions/TMPostInfo';
import TMCreatePostRequest from '../../../../../definitions/TMCreatePostRequest';
import TMPostsList from '../../../../../definitions/TMPostsList';
import ReadGlipPostsNewParameters from '../../../../../definitions/ReadGlipPostsNewParameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public postId: string | null;

  public constructor(_parent: ParentInterface, postId: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.postId = postId;
  }

  public path(withParameter = true): string {
    if (withParameter && this.postId !== null) {
      return `${this._parent.path()}/posts/${this.postId}`;
    }
    return `${this._parent.path()}/posts`;
  }

  /**
   * Returns a list of posts from the specified chat.
   * HTTP Method: get
   * Endpoint: /team-messaging/v1/chats/{chatId}/posts
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  public async list(queryParams?: ReadGlipPostsNewParameters, restRequestConfig?: RestRequestConfig): Promise<TMPostsList> {
    const r = await this.rc.get<TMPostsList>(this.path(false), queryParams, restRequestConfig);
    return r.data;
  }

  /**
   * Creates a post in the chat specified in path. Any mention can be added within the `text` attribute of the request body in .md format - `![:Type](id)`, where `type` is one of (Person, Team, File, Note, Task, Event, Link, Card) and `id` is a unique identifier of the mentioned object of the specified type. Attachments of the following types (File, Card, Event, Note) can also be added to a post by passing type and ID of attachment(s) in request body.
   * HTTP Method: post
   * Endpoint: /team-messaging/v1/chats/{chatId}/posts
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  public async post(tMCreatePostRequest: TMCreatePostRequest, restRequestConfig?: RestRequestConfig): Promise<TMPostInfo> {
    const r = await this.rc.post<TMPostInfo>(this.path(false), tMCreatePostRequest, undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Returns information about the specified post.
   * HTTP Method: get
   * Endpoint: /team-messaging/v1/chats/{chatId}/posts/{postId}
   * Rate Limit Group: Light
   * App Permission: TeamMessaging
   */
  public async get(restRequestConfig?: RestRequestConfig): Promise<TMPostInfo> {
    if (this.postId === null) {
      throw new Error('postId must be specified.');
    }
    const r = await this.rc.get<TMPostInfo>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Deletes the specified post from the chat.
   * HTTP Method: delete
   * Endpoint: /team-messaging/v1/chats/{chatId}/posts/{postId}
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  public async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.postId === null) {
      throw new Error('postId must be specified.');
    }
    const r = await this.rc.delete<string>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Updates a specific post within a chat.
   * HTTP Method: patch
   * Endpoint: /team-messaging/v1/chats/{chatId}/posts/{postId}
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  public async patch(tMUpdatePostRequest: TMUpdatePostRequest, restRequestConfig?: RestRequestConfig): Promise<TMPostInfo> {
    if (this.postId === null) {
      throw new Error('postId must be specified.');
    }
    const r = await this.rc.patch<TMPostInfo>(this.path(), tMUpdatePostRequest, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
