import type MthListMessagesParameters from "../../../../../definitions/MthListMessagesParameters.js";
import type MthSendMessageRequest from "../../../../../definitions/MthSendMessageRequest.js";
import type ThreadMessageList from "../../../../../definitions/ThreadMessageList.js";
import type ThreadMessageModel from "../../../../../definitions/ThreadMessageModel.js";
import type ThreadMessagesDeleteRequest from "../../../../../definitions/ThreadMessagesDeleteRequest.js";
import type {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../types.js";
import Utils from "../../../../../Utils.js";
import Content from "./Content/index.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/messages`;
  }
  /**
   * Returns a list of messages across one or more threads.
   * All filters are applied as "AND" conditions.
   *
   * The records are sorted by `creationTime` in ascending order.
   *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/message-threads/messages
   * Rate Limit Group: Medium
   * App Permission: SMS
   */
  public async get(
    queryParams?: MthListMessagesParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<ThreadMessageList> {
    const r = await this.rc.get<ThreadMessageList>(
      this.path(),
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Creates and sends a new message to one or more recipients.
   *
   * The message is automatically attached to the thread specified in the `threadId` parameter. If `threadId`
   * is omitted, it is routed to the matching thread based on the `from` and `to` phone numbers;
   * a new thread is created automatically when no matching thread exists.
   *
   * The endpoint accepts two request formats:
   * - `application/json` - for text-only messages.
   * - `multipart/form-data` - to send a message together with one or more binary attachments
   *   (for MMS / rich messages). Put the message fields in the `metadata` part and each file in
   *   an `attachments` part, as shown in the example below.
   *
   * Note: a suggested attachment filename is optional; when needed, provide it via the `filename`
   * field in the `Content-Disposition` header.
   *
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/message-threads/messages
   * Rate Limit Group: Medium
   * App Permission: SMS
   */
  public async post(
    mthSendMessageRequest: MthSendMessageRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<ThreadMessageModel> {
    const formData = await Utils.getFormData(mthSendMessageRequest);
    const r = await this.rc.post<ThreadMessageModel>(
      this.path(),
      formData,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Deletes thread message(s).
   *
   * HTTP Method: delete
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/message-threads/messages
   * Rate Limit Group: Medium
   * App Permission: SMS
   */
  public async delete(
    threadMessagesDeleteRequest: ThreadMessagesDeleteRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<string> {
    const r = await this.rc.delete<string>(
      this.path(),
      threadMessagesDeleteRequest,
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
