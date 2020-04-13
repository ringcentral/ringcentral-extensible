import CreateMultipleWirelessPointsRequest from '../../../../../definitions/CreateMultipleWirelessPointsRequest'
import CreateMultipleWirelessPointsResponse from '../../../../../definitions/CreateMultipleWirelessPointsResponse'
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
    return `${this.parent.path()}/wireless-points-bulk-create`
  }

  /**
   * Operation: Create Multiple Wireless Points
   * Http post /restapi/v1.0/account/{accountId}/emergency-address-auto-update/wireless-points-bulk-create
   */
  async post(CreateMultipleWirelessPointsRequest createMultipleWirelessPointsRequest): Promise<CreateMultipleWirelessPointsResponse> {
    return this.rc.post(this.path(), createMultipleWirelessPointsRequest)
  }
}

export default Index
