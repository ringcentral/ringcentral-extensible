import CallPartyFlip from '../../../../../../../definitions/CallPartyFlip';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }

  public path(withParameter = false): string {
    return `${this._parent.path()}/flip`;
  }

  /**
   * Performs call flip procedure by holding opposite party and calling to the specified target
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/flip
   * Rate Limit Group: Light
   * App Permission: CallControl
   */
  public async post(callPartyFlip: CallPartyFlip, restRequestConfig?: RestRequestConfig): Promise<string> {
    const r = await this.rc.post<string>(this.path(), callPartyFlip, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
