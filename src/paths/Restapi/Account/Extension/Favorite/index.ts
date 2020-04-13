import FavoriteCollection from '../../../../../definitions/FavoriteCollection'
import FavoriteContactList from '../../../../../definitions/FavoriteContactList'
import Parent from '..'
import RestClient from '../../../../..'

class Index {
  rc: RestClient
  parent: Parent

  Index(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  string path() {
    return `${this.parent.path()}/favorite`
  }

  /**
   * Operation: Get Favorite Contact List
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/favorite
   */
  async get(): Promise<FavoriteContactList> {
    return this.rc.get(this.path())
  }

  /**
   * Operation: Update Favorite Contact List
   * Http put /restapi/v1.0/account/{accountId}/extension/{extensionId}/favorite
   */
  async put(FavoriteCollection favoriteCollection): Promise<FavoriteContactList> {
    return this.rc.put(this.path(), favoriteCollection)
  }
}

export default Index
