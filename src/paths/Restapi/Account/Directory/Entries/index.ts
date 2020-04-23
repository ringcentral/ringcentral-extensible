import Search from './Search'
import { DirectoryResource, ListDirectoryEntriesParameters, ContactResource } from '../../../../../definitions'
import Parent from '..'
import RestClient from '../../../../..'

class Entries {
  rc: RestClient
  entryId: (string | null)
  parent: Parent

  constructor (parent: Parent, entryId: (string | null) = null) {
    this.parent = parent
    this.rc = parent.rc
    this.entryId = entryId
  }

  path (withParameter: boolean = true): string {
    if (withParameter && this.entryId !== null) {
      return `${this.parent.path()}/entries/${this.entryId}`
    }

    return `${this.parent.path()}/entries`
  }

  /**
   * Operation: Get Company Directory Entries
   * Http get /restapi/v1.0/account/{accountId}/directory/entries
   */
  async list (queryParams?: ListDirectoryEntriesParameters): Promise<DirectoryResource> {
    return this.rc.get(this.path(false), queryParams)
  }

  /**
   * Operation: Get Corporate Directory Entry
   * Http get /restapi/v1.0/account/{accountId}/directory/entries/{entryId}
   */
  async get (): Promise<ContactResource> {
    if (this.entryId === null) {
      throw new Error('entryId must be specified.')
    }

    return this.rc.get(this.path())
  }

  search (): Search {
    return new Search(this)
  }
}

export default Entries
