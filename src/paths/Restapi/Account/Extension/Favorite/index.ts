import { FavoriteContactList, FavoriteCollection } from '../../../../../definitions'
import Parent from '..'
import RestClient from '../../../../..'

class Favorite {
  rc: RestClient
  parent: Parent

  constructor (parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path (): string {
    return `${this.parent.path()}/favorite`
  }

  /**
   * Operation: Get Favorite Contact List
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/favorite
   */
  async get (): Promise<FavoriteContactList> {
    return this.rc.get(this.path())
  }

  /**
   * Operation: Update Favorite Contact List
   * Http put /restapi/v1.0/account/{accountId}/extension/{extensionId}/favorite
   */
  async put (favoriteCollection: FavoriteCollection): Promise<FavoriteContactList> {
    return this.rc.put(this.path(), favoriteCollection)
  }
}

export default Favorite
