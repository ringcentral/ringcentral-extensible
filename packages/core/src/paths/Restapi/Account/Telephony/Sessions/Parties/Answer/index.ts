import CallParty from '../../../../../../../definitions/CallParty';
import AnswerTarget from '../../../../../../../definitions/AnswerTarget';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
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
  async post(answerTarget: AnswerTarget, restRequestConfig?: RestRequestConfig): Promise<CallParty> {
    const r = await this.rc.post<CallParty>(this.path(), answerTarget, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
