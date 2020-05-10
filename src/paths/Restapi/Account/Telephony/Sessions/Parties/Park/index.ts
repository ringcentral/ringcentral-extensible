import {RestRequestConfig} from '../../../../../../../Rest';
import {CallParty} from '../../../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../../../..';

class Park {
  rc: RingCentral;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/park`;
  }

  /**
   * Operation: Call Park
   * Rate Limit Group: Light
   * Http post /restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/park
   */
  async post(config?: RestRequestConfig): Promise<CallParty> {
    const r = await this.rc.post<CallParty>(this.path(), undefined, config);
    return r.data;
  }
}

export default Park;
