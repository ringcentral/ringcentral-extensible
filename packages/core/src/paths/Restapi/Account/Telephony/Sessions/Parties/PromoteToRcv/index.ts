import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/promote-to-rcv`;
  }

  /**
   * Creates a new RCV meeting and move parties to it
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/promote-to-rcv
   * Rate Limit Group: Light
   * App Permission: CallControl
   */
  async post(restRequestConfig?: RestRequestConfig): Promise<string> {
    const r = await this.rc.post<string>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
