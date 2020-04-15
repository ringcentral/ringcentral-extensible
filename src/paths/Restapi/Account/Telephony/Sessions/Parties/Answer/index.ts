import AnswerTarget from '../../../../../../../definitions/AnswerTarget'
import CallParty from '../../../../../../../definitions/CallParty'
import Parent from '..'
import RestClient from '../../../../../../..'

class Index {
  rc: RestClient
  parent: Parent

  Index(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path(): string {
    return `${this.parent.path()}/answer`
  }

  /**
   * Operation: Answer Call Party
   * Http post /restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/answer
   */
  async post(answerTarget: AnswerTarget): Promise<CallParty> {
    return this.rc.post(this.path(), answerTarget)
  }
}

export default Index
