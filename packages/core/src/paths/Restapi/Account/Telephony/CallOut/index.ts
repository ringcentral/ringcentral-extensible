import CallSession from '../../../../../definitions/CallSession';
import MakeCallOutRequest from '../../../../../definitions/MakeCallOutRequest';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }

  public path(withParameter = false): string {
    return `${this._parent.path()}/call-out`;
  }

  /**
   * Creates a new outbound call out session. Currently this method is supported for Softphone/Hardphone only, since device IDs for WebRTC/Mobile apps cannot be obtained.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/telephony/call-out
   * Rate Limit Group: Heavy
   * App Permission: CallControl
   */
  public async post(makeCallOutRequest: MakeCallOutRequest, restRequestConfig?: RestRequestConfig): Promise<CallSession> {
    const r = await this.rc.post<CallSession>(this.path(), makeCallOutRequest, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
