import Content from './Content';
import DeleteMessageParameters from '../../../../../definitions/DeleteMessageParameters';
import UpdateMessageParameters from '../../../../../definitions/UpdateMessageParameters';
import UpdateMessageRequest from '../../../../../definitions/UpdateMessageRequest';
import GetMessageInfoResponse from '../../../../../definitions/GetMessageInfoResponse';
import DeleteMessageByFilterParameters from '../../../../../definitions/DeleteMessageByFilterParameters';
import GetMessageList from '../../../../../definitions/GetMessageList';
import ListMessagesParameters from '../../../../../definitions/ListMessagesParameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  messageId: string | null;

  constructor(parent: ParentInterface, messageId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.messageId = messageId;
  }

  path(withParameter = true): string {
    if (withParameter && this.messageId !== null) {
      return `${this.parent.path()}/message-store/${this.messageId}`;
    }
    return `${this.parent.path()}/message-store`;
  }

  /**
   * Returns the list of messages from an extension mailbox.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/message-store
   * Rate Limit Group: Light
   * App Permission: ReadMessages
   * User Permission: ReadMessages
   */
  async list(queryParams?: ListMessagesParameters, restRequestConfig?: RestRequestConfig): Promise<GetMessageList> {
    const r = await this.rc.get<GetMessageList>(this.path(false), queryParams, restRequestConfig);
    return r.data;
  }

  /**
   * Deletes conversation(s) by conversation ID(s). Batch request is supported, max number of IDs passed as query/path parameters is 50. Alternative syntax is supported - user conversations can be deleted by passing multiple IDs in request body as an array of string, max number of conversation IDs passed in request body is 100. In this case asterisk is used in the path instead of IDs
   * HTTP Method: delete
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/message-store
   * Rate Limit Group: Medium
   * App Permission: EditMessages
   * User Permission: EditMessages
   */
  async deleteAll(queryParams?: DeleteMessageByFilterParameters, restRequestConfig?: RestRequestConfig): Promise<string> {
    const r = await this.rc.delete<string>(this.path(false), queryParams, restRequestConfig);
    return r.data;
  }

  /**
   * Returns individual message record(s) by the given message ID(s). The length of inbound messages is unlimited. Batch request is supported.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/message-store/{messageId}
   * Rate Limit Group: Light
   * App Permission: ReadMessages
   * User Permission: ReadMessages
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<GetMessageInfoResponse> {
    if (this.messageId === null) {
      throw new Error('messageId must be specified.');
    }
    const r = await this.rc.get<GetMessageInfoResponse>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Updates message(s) by ID(s). Currently only message read status can be updated. Batch request is supported, max number of IDs passed as query/path parameters is 50. Alternative syntax is supported - user messages can be updated by passing multiple IDs in request body as an array of string, max number of IDs passed in request body is 1000. In this case asterisk is used in the path instead of IDs.
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/message-store/{messageId}
   * Rate Limit Group: Medium
   * App Permission: EditMessages
   * User Permission: EditMessages
   */
  async put(updateMessageRequest: UpdateMessageRequest, queryParams?: UpdateMessageParameters, restRequestConfig?: RestRequestConfig): Promise<GetMessageInfoResponse> {
    if (this.messageId === null) {
      throw new Error('messageId must be specified.');
    }
    const r = await this.rc.put<GetMessageInfoResponse>(this.path(), updateMessageRequest, queryParams, restRequestConfig);
    return r.data;
  }

  /**
   * Deletes message(s) by the given message ID(s). The first call of this method transfers the message to the 'Delete' status. The second call transfers the deleted message to the 'Purged' status. If it is required to make the message 'Purged' immediately (from the first call), then set the query parameter purge to 'True'.
   * HTTP Method: delete
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/message-store/{messageId}
   * Rate Limit Group: Medium
   * App Permission: EditMessages
   * User Permission: EditMessages
   */
  async delete(queryParams?: DeleteMessageParameters, restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.messageId === null) {
      throw new Error('messageId must be specified.');
    }
    const r = await this.rc.delete<string>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }

  content(attachmentId: (string | null) = null): Content {
    return new Content(this, attachmentId);
  }
}
export default Index;
