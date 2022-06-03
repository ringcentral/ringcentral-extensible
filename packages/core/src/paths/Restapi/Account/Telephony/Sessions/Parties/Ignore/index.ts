import IgnoreRequestBody from '../../../../../../../definitions/IgnoreRequestBody';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
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
  async post(ignoreRequestBody: IgnoreRequestBody, restRequestConfig?: RestRequestConfig): Promise<string> {
    const r = await this.rc.post<string>(this.path(), ignoreRequestBody, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
