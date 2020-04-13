import UpdateMultipleWirelessPointsRequest from '../../../../../definitions/UpdateMultipleWirelessPointsRequest'
import UpdateMultipleWirelessPointsResponse from '../../../../../definitions/UpdateMultipleWirelessPointsResponse'
import Parent from '..'
import RestClient from '../../../../..'

class Index {
  rc: RestClient
  parent: Parent

  Index(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  string path() {
    return `${this.parent.path()}/wireless-points-bulk-update`
  }

  /**
   * Operation: Update Multiple Wireless Points
   * Http post /restapi/v1.0/account/{accountId}/emergency-address-auto-update/wireless-points-bulk-update
   */
  async post(UpdateMultipleWirelessPointsRequest updateMultipleWirelessPointsRequest): Promise<UpdateMultipleWirelessPointsResponse> {
    return this.rc.post(this.path(), updateMultipleWirelessPointsRequest)
  }
}

export default Index
