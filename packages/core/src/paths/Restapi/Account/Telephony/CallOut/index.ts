import type CallSession from "../../../../../definitions/CallSession.js";
import type MakeCallOutRequest from "../../../../../definitions/MakeCallOutRequest.js";
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
    return `${this._parent.path()}/call-out`;
  }
  /**
   * Creates a new CallOut telephony session: an outbound call from the caller described in `from`
   * to the destination in `to`. The caller may be identified with `from.deviceId` or with
   * `from.extensionId` (internal extension / mailbox id); use one or the other, not both.
   * When using `from.deviceId`, only Softphone and Hardphone device instance ids are supported;
   * WebRTC/Mobile clients do not expose usable device ids for this API today.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/telephony/call-out
   * Rate Limit Group: Heavy
   * App Permission: CallControl
   */
  public async post(
    makeCallOutRequest: MakeCallOutRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<CallSession> {
    const r = await this.rc.post<CallSession>(
      this.path(),
      makeCallOutRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
