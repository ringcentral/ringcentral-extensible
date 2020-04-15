import ContactResource from '../../../../../definitions/ContactResource'
import ListDirectoryEntriesParameters from '../../../../../definitions/ListDirectoryEntriesParameters'
import DirectoryResource from '../../../../../definitions/DirectoryResource'
import Parent from '..'
import RestClient from '../../../../..'

class Index {
  rc: RestClient
  entryId: string
  parent: Parent

  constructor(parent: Parent, entryId: string = null) {
    this.parent = parent
    this.rc = parent.rc
    this.entryId = entryId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.entryId !== null) {
      return `${this.parent.path()}/entries/${this.entryId}`
    }

    return `${this.parent.path()}/entries`
  }

  /**
   * Operation: Get Company Directory Entries
   * Http get /restapi/v1.0/account/{accountId}/directory/entries
   */
  async list(queryParams?: ListDirectoryEntriesParameters): Promise<DirectoryResource> {
    return this.rc.get(this.path(false), queryParams)
  }

  /**
   * Operation: Get Corporate Directory Entry
   * Http get /restapi/v1.0/account/{accountId}/directory/entries/{entryId}
   */
  async get(): Promise<ContactResource> {
    if (this.entryId === undefined || this.entryId === null) {
      throw new Error("entryId must not be undefined or null")
    }

    return this.rc.get(this.path())
  }
}

export default Index
