import {CallParty, PickupTarget} from '../../../../../../../definitions';
import Parent from '..';
import RestClient from '../../../../../../..';

class Pickup {
  rc: RestClient;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/pickup`;
  }

  /**
   * Operation: Pickup Call
   * Rate Limit Group: Light
   * Http post /restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/pickup
   */
  async post(pickupTarget: PickupTarget): Promise<CallParty> {
    const r = await this.rc.post(this.path(), pickupTarget);
    return r.data;
  }
}

export default Pickup;
