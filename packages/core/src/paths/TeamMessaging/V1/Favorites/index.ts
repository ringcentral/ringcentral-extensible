import TMChatListWithoutNavigation from "../../../../definitions/TMChatListWithoutNavigation.js";
import ListFavoriteChatsNewParameters from "../../../../definitions/ListFavoriteChatsNewParameters.js";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/favorites`;
  }
  /**
   * Returns a list of the current user's favorite chats.
   * HTTP Method: get
   * Endpoint: /team-messaging/v1/favorites
   * Rate Limit Group: Light
   * App Permission: TeamMessaging
   */
  public async get(
    queryParams?: ListFavoriteChatsNewParameters,
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
