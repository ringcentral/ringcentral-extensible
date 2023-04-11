import TMChatListWithoutNavigation from '../../../../definitions/TMChatListWithoutNavigation';
import ListFavoriteChatsNewParameters from '../../../../definitions/ListFavoriteChatsNewParameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/favorites`;
  }

  /**
   * Returns a list of the current user's favorite chats.
   * HTTP Method: get
   * Endpoint: /team-messaging/v1/favorites
   * Rate Limit Group: Light
   * App Permission: TeamMessaging
   */
  async get(queryParams?: ListFavoriteChatsNewParameters, restRequestConfig?: RestRequestConfig): Promise<TMChatListWithoutNavigation> {
    const r = await this.rc.get<TMChatListWithoutNavigation>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;
