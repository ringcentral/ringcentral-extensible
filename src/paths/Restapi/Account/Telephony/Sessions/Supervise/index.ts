import {RestRequestConfig} from '../../../../../../Rest';
import {
  SuperviseCallSession,
  SuperviseCallSessionRequest,
} from '../../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../../..';

class Supervise {
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
   * Operation: Supervise Call Session
   * Rate Limit Group: Light
   * Http post /restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/supervise
   */
  async post(
    superviseCallSessionRequest: SuperviseCallSessionRequest,
    config?: RestRequestConfig
  ): Promise<SuperviseCallSession> {
    const r = await this.rc.post<SuperviseCallSession>(
      this.path(),
      superviseCallSessionRequest,
      undefined,
      config
    );
    return r.data;
  }
}

export default Supervise;
