import {RestRequestConfig} from '../../../../../../../Rest';
import {IgnoreRequestBody} from '../../../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../../../..';

class Ignore {
  rc: RingCentral;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/ignore`;
  }

  /**
   * Operation: Ignore Call in Queue
   * Rate Limit Group: Light
   * Http post /restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/ignore
   */
  async post(
    ignoreRequestBody: IgnoreRequestBody,
    config?: RestRequestConfig
  ): Promise<string> {
    const r = await this.rc.post<string>(
      this.path(),
      ignoreRequestBody,
      undefined,
      config
    );
    return r.data;
  }
}

export default Ignore;
