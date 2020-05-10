import Content from './Content';
import {RestRequestConfig} from '../../../../../Rest';
import {
  GetMessageList,
  ListMessagesParameters,
  GetMessageInfoResponse,
  UpdateMessageRequest,
  UpdateMessageParameters,
  DeleteMessageParameters,
} from '../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../..';

class MessageStore {
  rc: RingCentral;
  messageId: string | null;
  parent: Parent;

  constructor(parent: Parent, messageId: string | null = null) {
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
   * Operation: Get Message List
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store
   */
  async list(
    queryParams?: ListMessagesParameters,
    config?: RestRequestConfig
  ): Promise<GetMessageList> {
    const r = await this.rc.get<GetMessageList>(
      this.path(false),
      queryParams,
      config
    );
    return r.data;
  }

  /**
   * Operation: Get Message
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}
   */
  async get(config?: RestRequestConfig): Promise<GetMessageInfoResponse> {
    if (this.messageId === null) {
      throw new Error('messageId must be specified.');
    }

    const r = await this.rc.get<GetMessageInfoResponse>(
      this.path(),
      undefined,
      config
    );
    return r.data;
  }

  /**
   * Operation: Update Message List
   * Rate Limit Group: Medium
   * Http put /restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}
   */
  async put(
    updateMessageRequest: UpdateMessageRequest,
    queryParams?: UpdateMessageParameters,
    config?: RestRequestConfig
  ): Promise<GetMessageInfoResponse> {
    if (this.messageId === null) {
      throw new Error('messageId must be specified.');
    }

    const r = await this.rc.put<GetMessageInfoResponse>(
      this.path(),
      updateMessageRequest,
      queryParams,
      config
    );
    return r.data;
  }

  /**
   * Operation: Delete Message
   * Rate Limit Group: Medium
   * Http delete /restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}
   */
  async delete(
    queryParams?: DeleteMessageParameters,
    config?: RestRequestConfig
  ): Promise<string> {
    if (this.messageId === null) {
      throw new Error('messageId must be specified.');
    }

    const r = await this.rc.delete<string>(this.path(), queryParams, config);
    return r.data;
  }

  content(attachmentId: string | null = null): Content {
    return new Content(this, attachmentId);
  }
}

export default MessageStore;
