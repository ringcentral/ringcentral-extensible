import CallParty from "../../../../../../../definitions/CallParty.js";
import PickupTarget from "../../../../../../../definitions/PickupTarget.js";
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
    return `${this._parent.path()}/pickup`;
  }
  /**
   * Picks up a call parked to the specified park location.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/pickup
   * Rate Limit Group: Light
   * App Permission: CallControl
   */
  public async post(
    pickupTarget: PickupTarget,
    restRequestConfig?: RestRequestConfig,
  ): Promise<CallParty> {
    const r = await this.rc.post<CallParty>(
      this.path(),
      pickupTarget,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
