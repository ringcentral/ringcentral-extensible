import type AssignMessageThreadRequest from "../../../../../definitions/AssignMessageThreadRequest.js";
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
    return `${this._parent.path()}/assign`;
  }
  /**
   * Assigns, unassigns, or reassigns the thread.
   * The authorized user must be in the list of thread monitors, otherwise the API returns a 403 error.
   *
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/message-threads/{threadId}/assign
   * Rate Limit Group: Medium
   * App Permission: SMS
   */
  public async post(
    assignMessageThreadRequest: AssignMessageThreadRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<MessageThread> {
    const r = await this.rc.post<MessageThread>(
      this.path(),
      assignMessageThreadRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
