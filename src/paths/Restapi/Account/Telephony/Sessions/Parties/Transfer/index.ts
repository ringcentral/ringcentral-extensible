import { CallParty, TransferTarget } from '../../../../../../../definitions'
import Parent from '..'
import RestClient from '../../../../../../..'

class Transfer {
  rc: RestClient
  parent: Parent

  constructor(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path(): string {
    return `${this.parent.path()}/transfer`
  }

  /**
   * Operation: Transfer Call Party
   * Http post /restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/transfer
   */
  async post(transferTarget: TransferTarget): Promise<CallParty> {
    return this.rc.post(this.path(), transferTarget)
  }
}

export default Transfer
