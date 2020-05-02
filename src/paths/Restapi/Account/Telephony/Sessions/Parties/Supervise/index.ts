import {
  PartySuperviseResponse,
  PartySuperviseRequest,
} from '../../../../../../../definitions';
import Parent from '..';
import RestClient from '../../../../../../..';

class Supervise {
  rc: RestClient;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/supervise`;
  }

  /**
   * Operation: Supervise Call Party
   * Rate Limit Group: Light
   * Http post /restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/supervise
   */
  async post(
    partySuperviseRequest: PartySuperviseRequest
  ): Promise<PartySuperviseResponse> {
    const r = await this.rc.post<PartySuperviseResponse>(
      this.path(),
      partySuperviseRequest
    );
    return r.data;
  }
}

export default Supervise;
