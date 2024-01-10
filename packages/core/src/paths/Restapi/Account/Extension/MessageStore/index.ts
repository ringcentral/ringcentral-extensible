import Content from './Content';
import type PatchMessageRequest from '../../../../../definitions/PatchMessageRequest';
import type DeleteMessageParameters from '../../../../../definitions/DeleteMessageParameters';
import type UpdateMessageRequest from '../../../../../definitions/UpdateMessageRequest';
import type GetMessageInfoResponse from '../../../../../definitions/GetMessageInfoResponse';
import type DeleteMessageByFilterParameters from '../../../../../definitions/DeleteMessageByFilterParameters';
import type GetMessageList from '../../../../../definitions/GetMessageList';
import type ListMessagesParameters from '../../../../../definitions/ListMessagesParameters';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public messageId: string | null;

  public constructor(_parent: ParentInterface, messageId: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.messageId = messageId;
  }
  public path(withParameter = true): string {
    if (withParameter && this.messageId !== null) {
      return `${this._parent.path()}/message-store/${this.messageId}`;
    }
    return `${this._parent.path()}/message-store`;
  }
  /**
   * Returns a list of messages from an extension mailbox.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/message-store
   * Rate Limit Group: Light
   * App Permission: ReadMessages
   * User Permission: ReadMessages
   */
  public async list(
    queryParams?: ListMessagesParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<GetMessageList> {
    const r = await this.rc.get<GetMessageList>(this.path(false), queryParams, restRequestConfig);
    return r.data;
  }

  /**
   * Deletes conversation(s) by conversation ID(s). Batch request is
   * supported, max number of IDs passed as query/path parameters is 50. Alternative
   * syntax is supported - user conversations can be deleted by passing multiple
   * IDs in request body as an array of string, max number of conversation IDs
   * passed in request body is 100. In this case asterisk is used in the path instead
   * of IDs
   *
   * HTTP Method: delete
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/message-store
   * Rate Limit Group: Medium
   * App Permission: EditMessages
   * User Permission: EditMessages
   */
  public async deleteAll(
    queryParams?: DeleteMessageByFilterParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<string> {
    const r = await this.rc.delete<string>(this.path(false), undefined, queryParams, restRequestConfig);
    return r.data;
  }

  /**
   * Returns an individual message record or multiple records by the given message ID(s).
   * The length of inbound messages is unlimited. Bulk syntax is supported.
   *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/message-store/{messageId}
   * Rate Limit Group: Light
   * App Permission: ReadMessages
   * User Permission: ReadMessages
   */
  public async get(restRequestConfig?: RestRequestConfig): Promise<GetMessageInfoResponse> {
    if (this.messageId === null) {
      throw new Error('messageId must be specified.');
    }
    const r = await this.rc.get<GetMessageInfoResponse>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Updates message(s) by their ID(s). Currently only message read status
   * can be updated through this method.
   *
   * Bulk syntax is supported, max number of IDs passed as query/path
   * parameters is 50. Alternative bulk syntax is also supported - user messages can be updated
   * by passing multiple IDs in request body as an array of string, max number
   * of IDs passed in the body is 1000. In this case asterisk is used in the
   * path instead of IDs.
   *
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/message-store/{messageId}
   * Rate Limit Group: Medium
   * App Permission: EditMessages
   * User Permission: EditMessages
   */
  public async put(
    updateMessageRequest: UpdateMessageRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<GetMessageInfoResponse> {
    if (this.messageId === null) {
      throw new Error('messageId must be specified.');
    }
    const r = await this.rc.put<GetMessageInfoResponse>(
      this.path(),
      updateMessageRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Deletes message(s) by the given message ID(s). The first call of
   * this method transfers the message to the 'Delete' status. The second call
   * transfers the deleted message to the 'Purged' status. If it is required to
   * make the message 'Purged' immediately (from the first call), then set the
   * query parameter purge to `true`.
   *
   * HTTP Method: delete
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/message-store/{messageId}
   * Rate Limit Group: Medium
   * App Permission: EditMessages
   * User Permission: EditMessages
   */
  public async delete(
    deleteMessageBulkRequest: string[],
    queryParams?: DeleteMessageParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<string> {
    if (this.messageId === null) {
      throw new Error('messageId must be specified.');
    }
    const r = await this.rc.delete<string>(this.path(), deleteMessageBulkRequest, queryParams, restRequestConfig);
    return r.data;
  }

  /**
   * Patches message(s) by ID(s). Currently only message read status update and
   * restoring deleted messages are supported through this method.
   *
   * For changing status of a message send `readStatus` set to either 'Read' or 'Unread' in request.
   * It is possible to restore a message and its attachments (if message status is 'Deleted') by sending
   * `availability` attribute set to 'Alive' in request body. If a message is already in 'Purged' state
   * then its attachments cannot be restored and the message itself is about to be physically deleted.
   *
   * Bulk syntax (both traditional and alternative one) is supported.
   *
   * HTTP Method: patch
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/message-store/{messageId}
   * Rate Limit Group: Medium
   * App Permission: EditMessages
   * User Permission: EditMessages
   */
  public async patch(
    patchMessageRequest: PatchMessageRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<GetMessageInfoResponse> {
    if (this.messageId === null) {
      throw new Error('messageId must be specified.');
    }
    const r = await this.rc.patch<GetMessageInfoResponse>(
      this.path(),
      patchMessageRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  public content(attachmentId: string | null = null): Content {
    return new Content(this, attachmentId);
  }
}
export default Index;
