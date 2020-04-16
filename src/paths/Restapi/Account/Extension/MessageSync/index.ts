import SyncMessagesParameters from '../../../../../definitions/SyncMessagesParameters'
import GetMessageSyncResponse from '../../../../../definitions/GetMessageSyncResponse'
import Parent from '..'
import RestClient from '../../../../..'

class Index {
  rc: RestClient
  parent: Parent

  constructor(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path(): string {
    return `${this.parent.path()}/message-sync`
  }

  /**
   * Operation: Sync Messages
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/message-sync
   */
  async get(queryParams?: SyncMessagesParameters): Promise<GetMessageSyncResponse> {
    return this.rc.get(this.path(), queryParams)
  }
}

export default Index
