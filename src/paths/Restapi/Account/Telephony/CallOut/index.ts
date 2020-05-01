import {CallSession, MakeCallOutRequest} from '../../../../../definitions';
import Parent from '..';
import RestClient from '../../../../..';

class CallOut {
  rc: RestClient;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/call-out`;
  }

  /**
   * Operation: Make CallOut
   * Rate Limit Group: Heavy
   * Http post /restapi/v1.0/account/{accountId}/telephony/call-out
   */
  async post(makeCallOutRequest: MakeCallOutRequest): Promise<CallSession> {
    const r = await this.rc.post(this.path(), makeCallOutRequest);
    return r.data;
  }
}

export default CallOut;
