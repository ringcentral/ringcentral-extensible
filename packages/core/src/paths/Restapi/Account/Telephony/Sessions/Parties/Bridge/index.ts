import CallParty from "../../../../../../../definitions/CallParty";
import BridgeTargetRequest from "../../../../../../../definitions/BridgeTargetRequest";
import {
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
    return `${this._parent.path()}/bridge`;
  }
  /**
   * Allows the user to connect multiple call session participants over a conference call bridge.
   * The current active call session ID and party ID of the user within this session should be specified
   * in path; the bridged call session ID and party ID of the user within that session should be specified
   * in request body. Thus, the user connects participants of two sessions into the one conference call
   * using his/her own party IDs from both sessions."
   *
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/bridge
   * Rate Limit Group: Light
   * App Permission: CallControl
   */
  public async post(
    bridgeTargetRequest: BridgeTargetRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<CallParty> {
    const r = await this.rc.post<CallParty>(
      this.path(),
      bridgeTargetRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
