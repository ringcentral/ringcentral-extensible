import type CallParty from "../../../../../../../definitions/CallParty";
import type AddPartyRequest from "../../../../../../../definitions/AddPartyRequest";
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
    return `${this._parent.path()}/bring-in`;
  }
  /**
   * Adds a new party to the call session by bringing in an established
   * SIP call connection. The maximum number of parties to bring in is 10; only
   * 1 call party can be added per request. Currently, the method is supported for
   * sessions of the `Conference` origin only.
   *
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/bring-in
   * Rate Limit Group: Light
   * App Permission: CallControl
   */
  public async post(
    addPartyRequest: AddPartyRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<CallParty> {
    const r = await this.rc.post<CallParty>(
      this.path(),
      addPartyRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
