import {RestRequestConfig} from '../../../../../../../Rest';
import {CallPartyFlip} from '../../../../../../../definitions';
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
    return `${this.parent.path()}/flip`;
  }

  /**
   * Operation: Call Flip on Party
   * Rate Limit Group: Light
   * Http post /restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/flip
   */
  async post(
    callPartyFlip: CallPartyFlip,
    config?: RestRequestConfig
  ): Promise<string> {
    const r = await this.rc.post<string>(
      this.path(),
      callPartyFlip,
      undefined,
      config
    );
    return r.data;
  }
}

export default Index;
