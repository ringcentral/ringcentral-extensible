import TMChatListWithoutNavigation from "../../../../../definitions/TMChatListWithoutNavigation.js";
import ListRecentChatsNewParameters from "../../../../../definitions/ListRecentChatsNewParameters.js";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/chats`;
  }
  /**
   * Returns recent chats where the user is a member. All records in response are sorted by the `lastModifiedTime` in descending order (the latest changed chat is displayed first on page)
   * HTTP Method: get
   * Endpoint: /team-messaging/v1/recent/chats
   * Rate Limit Group: Light
   * App Permission: TeamMessaging
   */
  public async get(
    queryParams?: ListRecentChatsNewParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<TMChatListWithoutNavigation> {
    const r = await this.rc.get<TMChatListWithoutNavigation>(
      this.path(),
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
