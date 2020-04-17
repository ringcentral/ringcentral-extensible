import CreateMultipleWirelessPointsRequest from '../../../../../definitions/CreateMultipleWirelessPointsRequest'
import CreateMultipleWirelessPointsResponse from '../../../../../definitions/CreateMultipleWirelessPointsResponse'
import Parent from '..'
import RestClient from '../../../../..'

class WirelessPointsBulkCreate {
  rc: RestClient
  parent: Parent

  constructor(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path(): string {
    return `${this.parent.path()}/wireless-points-bulk-create`
  }

  /**
   * Operation: Create Multiple Wireless Points
   * Http post /restapi/v1.0/account/{accountId}/emergency-address-auto-update/wireless-points-bulk-create
   */
  async post(createMultipleWirelessPointsRequest: CreateMultipleWirelessPointsRequest): Promise<CreateMultipleWirelessPointsResponse> {
    return this.rc.post(this.path(), createMultipleWirelessPointsRequest)
  }
}

export default WirelessPointsBulkCreate
