import { RestRequestConfig } from '../../../../../../../Rest';
import { IgnoreRequestBody } from '../../../../../../../definitions';
import Parent from '..';
import { RingCentral } from '../../../../../../..';

class Index {
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
   * Ignores a call to a call queue agent in `Setup` or `Proceeding` state.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/ignore
   * Rate Limit Group: Light
   * App Permission: CallControl
   */
  async post(
    ignoreRequestBody: IgnoreRequestBody,
    restRequestConfig?: RestRequestConfig,
  ): Promise<string> {
    const r = await this.rc.post<string>(
      this.path(),
      ignoreRequestBody,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
