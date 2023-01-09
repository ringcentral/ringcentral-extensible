import TMChatListWithoutNavigation from '../../../../definitions/TMChatListWithoutNavigation';
import ListRecentChatsNewParameters from '../../../../definitions/ListRecentChatsNewParameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/chats`;
  }

  /**
   * Returns recent chats where the user is a member. All records in response are sorted by the `lastModifiedTime` in descending order (the latest changed chat is displayed first on page)
   * HTTP Method: get
   * Endpoint: /team-messaging/{version}/recent/chats
   * Rate Limit Group: Light
   * App Permission: TeamMessaging
   */
  async get(queryParams?: ListRecentChatsNewParameters, restRequestConfig?: RestRequestConfig): Promise<TMChatListWithoutNavigation> {
    const r = await this.rc.get<TMChatListWithoutNavigation>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;
