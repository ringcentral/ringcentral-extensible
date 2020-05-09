import {CallParty, TransferTarget} from '../../../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../../../..';

class Transfer {
  rc: RingCentral;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/transfer`;
  }

  /**
   * Operation: Transfer Call Party
   * Rate Limit Group: Light
   * Http post /restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/transfer
   */
  async post(transferTarget: TransferTarget): Promise<CallParty> {
    const r = await this.rc.post<CallParty>(this.path(), transferTarget);
    return r.data;
  }
}

export default Transfer;
