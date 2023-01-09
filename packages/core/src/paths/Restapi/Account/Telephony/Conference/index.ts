import CallSession from '../../../../../definitions/CallSession';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/conference`;
  }

  /**
   * Initiates a conference call session.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/telephony/conference
   * Rate Limit Group: Heavy
   * App Permission: CallControl
   */
  async post(restRequestConfig?: RestRequestConfig): Promise<CallSession> {
    const r = await this.rc.post<CallSession>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
