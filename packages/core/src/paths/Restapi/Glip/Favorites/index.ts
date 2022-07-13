import GlipChatsListWithoutNavigation from '../../../../definitions/GlipChatsListWithoutNavigation';
import ListFavoriteChatsParameters from '../../../../definitions/ListFavoriteChatsParameters';
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
   * Returns a list of the current user's favorite chats. **Note** 'Chat' is a general name for all types of threads including *Personal* (user's own me-chat), *Direct* (one on one chat), *Group* (chat of 3-15 participants without specific name), *Team* (chat of 2 and more participants, with a specific name), *Everyone* (company chat including all employees, with a specific name)."
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/glip/favorites
   * Rate Limit Group: Light
   * App Permission: TeamMessaging
   * User Permission: UnifiedAppDesktop
   */
  async get(queryParams?: ListFavoriteChatsParameters, restRequestConfig?: RestRequestConfig): Promise<GlipChatsListWithoutNavigation> {
    const r = await this.rc.get<GlipChatsListWithoutNavigation>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;
