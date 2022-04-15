import { RestRequestConfig } from '../../../../../Rest';
import { MakeCallOutRequest, CallSession } from '../../../../../definitions';
import Parent from '..';
import { RingCentral } from '../../../../..';

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
   * Creates a new outbound call out session. Currently this method is supported for Softphone/Hardphone only, since device IDs for WebRTC/Mobile apps cannot be obtained.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/telephony/call-out
   * Rate Limit Group: Heavy
   * App Permission: CallControl
   */
  async post(
    makeCallOutRequest: MakeCallOutRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<CallSession> {
    const r = await this.rc.post<CallSession>(
      this.path(),
      makeCallOutRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
