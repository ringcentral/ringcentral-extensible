import MessageStoreReportArchive from '../../../../../definitions/MessageStoreReportArchive'
import Parent from '..'
import RestClient from '../../../../..'

class Index {
  rc: RestClient
  archiveId: string
  parent: Parent

  constructor(parent: Parent, archiveId: string = null) {
    this.parent = parent
    this.rc = parent.rc
    this.archiveId = archiveId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.archiveId !== null) {
      return `${this.parent.path()}/archive/${this.archiveId}`
    }

    return `${this.parent.path()}/archive`
  }

  /**
   * Operation: Get Message Store Report Archive
   * Http get /restapi/v1.0/account/{accountId}/message-store-report/{taskId}/archive
   */
  async list(): Promise<MessageStoreReportArchive> {
    return this.rc.get(this.path(false))
  }

  /**
   * Operation: Get Message Store Report Archive Content
   * Http get /restapi/v1.0/account/{accountId}/message-store-report/{taskId}/archive/{archiveId}
   */
  async get(): Promise<string> {
    if (this.archiveId === undefined || this.archiveId === null) {
      throw new Error("archiveId must not be undefined or null")
    }

    return this.rc.get(this.path())
  }
}

export default Index
