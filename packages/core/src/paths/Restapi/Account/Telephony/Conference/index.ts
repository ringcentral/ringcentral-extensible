import type CallSession from '../../../../../definitions/CallSession';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }

  public path(): string {
    return `${this._parent.path()}/conference`;
  }

  /**
   * Initiates a conference call session.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/telephony/conference
   * Rate Limit Group: Heavy
   * App Permission: CallControl
   */
  public async post(restRequestConfig?: RestRequestConfig): Promise<CallSession> {
    const r = await this.rc.post<CallSession>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
