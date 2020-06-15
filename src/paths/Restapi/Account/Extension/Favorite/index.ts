import {RestRequestConfig} from '../../../../../Rest';
import {
  FavoriteContactList,
  FavoriteCollection,
} from '../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../..';

class Index {
  rc: RingCentral;
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
  async get(config?: RestRequestConfig): Promise<FavoriteContactList> {
    const r = await this.rc.get<FavoriteContactList>(
      this.path(),
      undefined,
      config
    );
    return r.data;
  }

  /**
   * Operation: Update Favorite Contact List
   * Rate Limit Group: Medium
   * Http put /restapi/v1.0/account/{accountId}/extension/{extensionId}/favorite
   */
  async put(
    favoriteCollection: FavoriteCollection,
    config?: RestRequestConfig
  ): Promise<FavoriteContactList> {
    const r = await this.rc.put<FavoriteContactList>(
      this.path(),
      favoriteCollection,
      undefined,
      config
    );
    return r.data;
  }
}

export default Index;
