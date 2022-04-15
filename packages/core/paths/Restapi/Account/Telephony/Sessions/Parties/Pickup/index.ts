import { RestRequestConfig } from '../../../../../../../Rest';
import { PickupTarget, CallParty } from '../../../../../../../definitions';
import Parent from '..';
import { RingCentral } from '../../../../../../..';

class Index {
  rc: RingCentral;

  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/pickup`;
  }

  /**
   * Picks up a call parked to the specified park location.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/pickup
   * Rate Limit Group: Light
   * App Permission: CallControl
   */
  async post(
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
