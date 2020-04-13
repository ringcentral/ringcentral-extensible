import SuperviseCallSessionRequest from '../../../../../../definitions/SuperviseCallSessionRequest'
import SuperviseCallSession from '../../../../../../definitions/SuperviseCallSession'
import Parent from '..'
import RestClient from '../../../../../..'

class Index {
  rc: RestClient
  parent: Parent

  Index(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  string path() {
    return `${this.parent.path()}/supervise`
  }

  /**
   * Operation: Supervise Call Session
   * Http post /restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/supervise
   */
  async post(SuperviseCallSessionRequest superviseCallSessionRequest): Promise<SuperviseCallSession> {
    return this.rc.post(this.path(), superviseCallSessionRequest)
  }
}

export default Index
