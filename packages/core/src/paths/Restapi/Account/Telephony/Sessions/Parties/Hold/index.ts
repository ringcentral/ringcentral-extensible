import type CallParty from '../../../../../../../definitions/CallParty';
import type HoldCallPartyRequest from '../../../../../../../definitions/HoldCallPartyRequest';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../../../types';

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/hold`;
  }
  /**
   * Puts the party to stand-alone mode and starts to play Hold Music according to configuration & state to peers. There is a known limitation for Hold API - hold via REST API doesn't work with hold placed via RingCentral apps or HardPhone. It means that if you muted participant via Call Control API and RingCentral Desktop app, then you need to unhold both endpoints to remove Hold Music and bring media back.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/hold
   * Rate Limit Group: Light
   * App Permission: CallControl
   */
  public async post(
    holdCallPartyRequest: HoldCallPartyRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<CallParty> {
    const r = await this.rc.post<CallParty>(this.path(), holdCallPartyRequest, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
