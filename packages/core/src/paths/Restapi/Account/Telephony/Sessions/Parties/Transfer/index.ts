import CallParty from "../../../../../../../definitions/CallParty.js";
import TransferTarget from "../../../../../../../definitions/TransferTarget.js";
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
    return `${this._parent.path()}/transfer`;
  }
  /**
   * Transfers an answered call to the specified call party. Applicable for a call session in "Answered" or "Hold" state.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/transfer
   * Rate Limit Group: Light
   * App Permission: CallControl
   */
  public async post(
    transferTarget: TransferTarget,
    restRequestConfig?: RestRequestConfig,
  ): Promise<CallParty> {
    const r = await this.rc.post<CallParty>(
      this.path(),
      transferTarget,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
