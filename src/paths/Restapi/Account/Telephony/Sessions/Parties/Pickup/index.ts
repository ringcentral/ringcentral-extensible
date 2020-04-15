import PickupTarget from '../../../../../../../definitions/PickupTarget'
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
    return `${this.parent.path()}/pickup`
  }

  /**
   * Operation: Pickup Call
   * Http post /restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/pickup
   */
  async post(pickupTarget: PickupTarget): Promise<CallParty> {
    return this.rc.post(this.path(), pickupTarget)
  }
}

export default Index
