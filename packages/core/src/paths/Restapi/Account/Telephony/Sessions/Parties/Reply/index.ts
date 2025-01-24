import type ReplyParty from "../../../../../../../definitions/ReplyParty";
import type CallPartyReply from "../../../../../../../definitions/CallPartyReply";
import type {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../../../types";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/reply`;
  }
  /**
   * Replies with text/pattern without picking up a call.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/reply
   * Rate Limit Group: Light
   * App Permission: CallControl
   */
  public async post(
    callPartyReply: CallPartyReply,
    restRequestConfig?: RestRequestConfig,
  ): Promise<ReplyParty> {
    const r = await this.rc.post<ReplyParty>(
      this.path(),
      callPartyReply,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
