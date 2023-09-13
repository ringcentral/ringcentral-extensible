import CallParty from '../../../../../../../definitions/CallParty';
import ForwardTarget from '../../../../../../../definitions/ForwardTarget';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }

  public path(): string {
    return `${this._parent.path()}/forward`;
  }

  /**
   * Forwards a non-answered incoming call to the specified call party. Applicable for a call session in "Setup" or "Proceeding" state.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/forward
   * Rate Limit Group: Light
   * App Permission: CallControl
   */
  public async post(forwardTarget: ForwardTarget, restRequestConfig?: RestRequestConfig): Promise<CallParty> {
    const r = await this.rc.post<CallParty>(this.path(), forwardTarget, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
