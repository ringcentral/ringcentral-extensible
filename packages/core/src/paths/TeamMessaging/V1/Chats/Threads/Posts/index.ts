import type ReadGlipThreadPostsNewParameters from "../../../../../../definitions/ReadGlipThreadPostsNewParameters.js";
import type TMPostsList from "../../../../../../definitions/TMPostsList.js";
import type {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/posts`;
  }
  /**
   * Returns a list of posts from the specified thread in a chat.
   * HTTP Method: get
   * Endpoint: /team-messaging/v1/chats/{chatId}/threads/{threadId}/posts
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  public async get(
    queryParams?: ReadGlipThreadPostsNewParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<TMPostsList> {
    const r = await this.rc.get<TMPostsList>(
      this.path(),
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
