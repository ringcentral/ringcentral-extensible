import {
  FavoriteContactList,
  FavoriteCollection,
} from '../../../../../definitions';
import Parent from '..';
import RestClient from '../../../../..';

class Favorite {
  rc: RestClient;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/favorite`;
  }

  /**
   * Operation: Get Favorite Contact List
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/favorite
   */
  async get(): Promise<FavoriteContactList> {
    const r = await this.rc.get(this.path());
    return r.data;
  }

  /**
   * Operation: Update Favorite Contact List
   * Rate Limit Group: Medium
   * Http put /restapi/v1.0/account/{accountId}/extension/{extensionId}/favorite
   */
  async put(
    favoriteCollection: FavoriteCollection
  ): Promise<FavoriteContactList> {
    const r = await this.rc.put(this.path(), favoriteCollection);
    return r.data;
  }
}

export default Favorite;
