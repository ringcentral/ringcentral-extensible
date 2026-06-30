import type MessageThread from "../../../../../definitions/MessageThread.js";
import type {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/resolve`;
  }
  /**
   * Resolves a message thread (sets the status to `Resolved`).
   * The current status of the thread must be `Open` for this operation to succeed.
   * The authorized user must be in the list of thread monitors, otherwise the API returns a 403 error.
   *
   * Once the thread is resolved its `assignee` attribute is cleared automatically.
   *
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/message-threads/{threadId}/resolve
   * Rate Limit Group: Medium
   * App Permission: SMS
   */
  public async post(
    restRequestConfig?: RestRequestConfig,
  ): Promise<MessageThread> {
    const r = await this.rc.post<MessageThread>(
      this.path(),
      {},
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
