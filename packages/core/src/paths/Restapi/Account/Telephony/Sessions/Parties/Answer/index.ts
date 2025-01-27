import CallParty from "../../../../../../../definitions/CallParty.js";
import AnswerTarget from "../../../../../../../definitions/AnswerTarget.js";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/answer`;
  }
  /**
   * Answers a call on a certain device by passing the corresponding device ID in request body. Supported for call forwarding, call transfer, call flip and call queues.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/answer
   * Rate Limit Group: Light
   * App Permission: CallControl
   */
  public async post(
    answerTarget: AnswerTarget,
    restRequestConfig?: RestRequestConfig,
  ): Promise<CallParty> {
    const r = await this.rc.post<CallParty>(
      this.path(),
      answerTarget,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
