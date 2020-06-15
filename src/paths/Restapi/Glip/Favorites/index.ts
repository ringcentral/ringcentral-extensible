import {RestRequestConfig} from '../../../../Rest';
import {
  GlipChatsListWithoutNavigation,
  ListFavoriteChatsParameters,
} from '../../../../definitions';
import Parent from '..';
import RingCentral from '../../../..';

class Index {
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
    queryParams?: ListFavoriteChatsParameters,
    config?: RestRequestConfig
  ): Promise<GlipChatsListWithoutNavigation> {
    const r = await this.rc.get<GlipChatsListWithoutNavigation>(
      this.path(),
      queryParams,
      config
    );
    return r.data;
  }
}

export default Index;
