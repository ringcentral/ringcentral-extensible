import {CallParty} from '../../../../../../../definitions';
import Parent from '..';
import RestClient from '../../../../../../..';

class Hold {
  rc: RestClient;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/hold`;
  }

  /**
   * Operation: Hold Call Party
   * Rate Limit Group: Light
   * Http post /restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/hold
   */
  async post(): Promise<CallParty> {
    const r = await this.rc.post<CallParty>(this.path());
    return r.data;
  }
}

export default Hold;
