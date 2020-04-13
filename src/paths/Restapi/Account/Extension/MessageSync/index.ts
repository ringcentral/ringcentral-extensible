import GetMessageSyncResponse from '../../../../../definitions/GetMessageSyncResponse'
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
    return `${this.parent.path()}/message-sync`
  }

  /**
   * Operation: Sync Messages
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/message-sync
   */
  async get(SyncMessagesParameters queryParams = null): Promise<GetMessageSyncResponse> {
    return this.rc.get(this.path(), queryParams)
  }
}

export default Index
