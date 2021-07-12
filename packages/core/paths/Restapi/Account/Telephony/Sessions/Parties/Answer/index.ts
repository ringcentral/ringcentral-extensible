import {RestRequestConfig} from '../../../../../../../Rest';
import {AnswerTarget, CallParty} from '../../../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../../../..';

class Index {
  rc: RingCentral;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }
  path(): string {
    return `${this.parent.path()}/answer`;
  }
  /**
   * Answers a call on a certain device by passing the corresponding device ID in request body. Supported for call forwarding, call transfer, call flip and call queues.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/answer
   * Rate Limit Group: Light
   * App Permission: CallControl
   */
  async post(
    answerTarget: AnswerTarget,
    restRequestConfig?: RestRequestConfig
  ): Promise<CallParty> {
    const r = await this.rc.post<CallParty>(
      this.path(),
      answerTarget,
      undefined,
      restRequestConfig
    );
    return r.data;
  }
}
export default Index;
