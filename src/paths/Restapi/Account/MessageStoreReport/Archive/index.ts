import { MessageStoreReportArchive } from '../../../../../definitions'
import Parent from '..'
import RestClient from '../../../../..'

class Archive {
  rc: RestClient
  archiveId: string
  parent: Parent

  constructor(parent: Parent, archiveId: string) {
    this.parent = parent
    this.rc = parent.rc
    this.archiveId = archiveId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.archiveId) {
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
    if (!this.archiveId) {
      throw new Error('archiveId must not be undefined')
    }

    return this.rc.get(this.path())
  }
}

export default Archive
