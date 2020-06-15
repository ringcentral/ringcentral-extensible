import {RestRequestConfig} from '../../../../../../../Rest';
import {CallParty, AnswerTarget} from '../../../../../../../definitions';
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
   * Operation: Answer Call Party
   * Rate Limit Group: Light
   * Http post /restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/answer
   */
  async post(
    answerTarget: AnswerTarget,
    config?: RestRequestConfig
  ): Promise<CallParty> {
    const r = await this.rc.post<CallParty>(
      this.path(),
      answerTarget,
      undefined,
      config
    );
    return r.data;
  }
}

export default Index;
