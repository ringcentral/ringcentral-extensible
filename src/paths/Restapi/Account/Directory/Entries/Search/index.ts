import SearchDirectoryEntriesRequest from '../../../../../../definitions/SearchDirectoryEntriesRequest'
import DirectoryResource from '../../../../../../definitions/DirectoryResource'
import Parent from '..'
import RestClient from '../../../../../..'

class Index {
  rc: RestClient
  parent: Parent

  Index(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path(): string {
    return `${this.parent.path()}/search`
  }

  /**
   * Operation: Search Company Directory Entries
   * Http post /restapi/v1.0/account/{accountId}/directory/entries/search
   */
  async post(searchDirectoryEntriesRequest: SearchDirectoryEntriesRequest): Promise<DirectoryResource> {
    return this.rc.post(this.path(), searchDirectoryEntriesRequest)
  }
}

export default Index
