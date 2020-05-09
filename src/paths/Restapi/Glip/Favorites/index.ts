import {
  GlipChatsListWithoutNavigation,
  ListFavoriteChatsParameters,
} from '../../../../definitions';
import Parent from '..';
import RingCentral from '../../../..';

class Favorites {
  rc: RingCentral;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/favorites`;
  }

  /**
   * Operation: Get Favorite Chats
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/glip/favorites
   */
  async get(
    queryParams?: ListFavoriteChatsParameters
  ): Promise<GlipChatsListWithoutNavigation> {
    const r = await this.rc.get<GlipChatsListWithoutNavigation>(
      this.path(),
      queryParams
    );
    return r.data;
  }
}

export default Favorites;
