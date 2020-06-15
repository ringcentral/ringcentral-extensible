import {RestRequestConfig} from '../../../../../../../Rest';
import {
  PartySuperviseResponse,
  PartySuperviseRequest,
} from '../../../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../../../..';

class Index {
  rc: RingCentral;
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
    partySuperviseRequest: PartySuperviseRequest,
    config?: RestRequestConfig
  ): Promise<PartySuperviseResponse> {
    const r = await this.rc.post<PartySuperviseResponse>(
      this.path(),
      partySuperviseRequest,
      undefined,
      config
    );
    return r.data;
  }
}

export default Index;
