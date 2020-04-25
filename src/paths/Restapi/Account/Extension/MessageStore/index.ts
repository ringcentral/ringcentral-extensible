import Content from './Content'
import { GetMessageList, ListMessagesParameters, GetMessageInfoResponse, UpdateMessageRequest, UpdateMessageParameters, DeleteMessageParameters } from '../../../../../definitions'
import Parent from '..'
import RestClient from '../../../../..'

class MessageStore {
  rc: RestClient
  messageId: (string | null)
  parent: Parent

  constructor (parent: Parent, messageId: (string | null) = null) {
    this.parent = parent
    this.rc = parent.rc
    this.messageId = messageId
  }

  path (withParameter: boolean = true): string {
    if (withParameter && this.messageId !== null) {
      return `${this.parent.path()}/message-store/${this.messageId}`
    }

    return `${this.parent.path()}/message-store`
  }

  /**
   * Operation: Get Message List
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store
   */
  async list (queryParams?: ListMessagesParameters): Promise<GetMessageList> {
    return this.rc.get(this.path(false), queryParams)
  }

  /**
   * Operation: Get Message
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}
   */
  async get (): Promise<GetMessageInfoResponse> {
    if (this.messageId === null) {
      throw new Error('messageId must be specified.')
    }

    return this.rc.get(this.path())
  }

  /**
   * Operation: Update Message List
   * Rate Limit Group: Medium
   * Http put /restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}
   */
  async put (updateMessageRequest: UpdateMessageRequest, queryParams?: UpdateMessageParameters): Promise<GetMessageInfoResponse> {
    if (this.messageId === null) {
      throw new Error('messageId must be specified.')
    }

    return this.rc.put(this.path(), updateMessageRequest, queryParams)
  }

  /**
   * Operation: Delete Message
   * Rate Limit Group: Medium
   * Http delete /restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}
   */
  async delete (queryParams?: DeleteMessageParameters): Promise<string> {
    if (this.messageId === null) {
      throw new Error('messageId must be specified.')
    }

    return this.rc.delete(this.path(), queryParams)
  }

  content (attachmentId: (string | null) = null): Content {
    return new Content(this, attachmentId)
  }
}

export default MessageStore
