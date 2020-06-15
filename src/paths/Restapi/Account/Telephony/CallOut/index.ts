import {RestRequestConfig} from '../../../../../Rest';
import {CallSession, MakeCallOutRequest} from '../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../..';

class Index {
  rc: RingCentral;
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
  async post(
    makeCallOutRequest: MakeCallOutRequest,
    config?: RestRequestConfig
  ): Promise<CallSession> {
    const r = await this.rc.post<CallSession>(
      this.path(),
      makeCallOutRequest,
      undefined,
      config
    );
    return r.data;
  }
}

export default Index;
