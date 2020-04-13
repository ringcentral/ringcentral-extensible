import TransferTarget from '../../../../../../../definitions/TransferTarget'
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

  string path() {
    return `${this.parent.path()}/transfer`
  }

  /**
   * Operation: Transfer Call Party
   * Http post /restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/transfer
   */
  async post(TransferTarget transferTarget): Promise<CallParty> {
    return this.rc.post(this.path(), transferTarget)
  }
}

export default Index
