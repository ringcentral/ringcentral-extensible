import Content from './Content'
import DeleteMessageParameters from '../../../../../definitions/DeleteMessageParameters'
import UpdateMessageRequest from '../../../../../definitions/UpdateMessageRequest'
import GetMessageInfoResponse from '../../../../../definitions/GetMessageInfoResponse'
import ListMessagesParameters from '../../../../../definitions/ListMessagesParameters'
import GetMessageList from '../../../../../definitions/GetMessageList'
import Parent from '..'
import RestClient from '../../../../..'

class MessageStore {
  rc: RestClient
  messageId: string
  parent: Parent

  constructor(parent: Parent, messageId: string = null) {
    this.parent = parent
    this.rc = parent.rc
    this.messageId = messageId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.messageId !== null) {
      return `${this.parent.path()}/message-store/${this.messageId}`
    }

    return `${this.parent.path()}/message-store`
  }

  /**
   * Operation: Get Message List
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store
   */
  async list(queryParams?: ListMessagesParameters): Promise<GetMessageList> {
    return this.rc.get(this.path(false), queryParams)
  }

  /**
   * Operation: Get Message
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}
   */
  async get(): Promise<GetMessageInfoResponse> {
    if (this.messageId === undefined || this.messageId === null) {
      throw new Error("messageId must not be undefined or null")
    }

    return this.rc.get(this.path())
  }

  /**
   * Operation: Update Message List
   * Http put /restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}
   */
  async put(updateMessageRequest: UpdateMessageRequest): Promise<GetMessageInfoResponse> {
    if (this.messageId === undefined || this.messageId === null) {
      throw new Error("messageId must not be undefined or null")
    }

    return this.rc.put(this.path(), updateMessageRequest)
  }

  /**
   * Operation: Delete Message
   * Http delete /restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}
   */
  async delete(queryParams?: DeleteMessageParameters): Promise<string> {
    if (this.messageId === undefined || this.messageId === null) {
      throw new Error("messageId must not be undefined or null")
    }

    return this.rc.delete(this.path(), queryParams)
  }

  content(attachmentId: string = null): Content {
    return new Content(this, attachmentId)
  }
}

export default MessageStore
