import { GetMessageSyncResponse, SyncMessagesParameters } from '../../../../../definitions'
import Parent from '..'
import RestClient from '../../../../..'

class MessageSync {
  rc: RestClient
  parent: Parent

  constructor (parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path (): string {
    return `${this.parent.path()}/message-sync`
  }

  /**
   * Operation: Sync Messages
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/message-sync
   */
  async get (queryParams?: SyncMessagesParameters): Promise<GetMessageSyncResponse> {
    return this.rc.get(this.path(), queryParams)
  }
}

export default MessageSync
