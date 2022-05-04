import { RestRequestConfig } from '../../../../../../../Rest';
import { CallPartyFlip } from '../../../../../../../definitions';
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
   * Performs call flip procedure by holding opposite party and calling to the specified target
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/flip
   * Rate Limit Group: Light
   * App Permission: CallControl
   */
  async post(callPartyFlip: CallPartyFlip, restRequestConfig?: RestRequestConfig): Promise<string> {
    const r = await this.rc.post<string>(this.path(), callPartyFlip, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
