import ValidateMultipleWirelessPointsRequest from '../../../../../definitions/ValidateMultipleWirelessPointsRequest'
import ValidateMultipleWirelessPointsResponse from '../../../../../definitions/ValidateMultipleWirelessPointsResponse'
import Parent from '..'
import RestClient from '../../../../..'

class Index {
  rc: RestClient
  parent: Parent

  Index(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path(): string {
    return `${this.parent.path()}/wireless-points-bulk-validate`
  }

  /**
   * Operation: Validate Multiple Wireless Points
   * Http post /restapi/v1.0/account/{accountId}/emergency-address-auto-update/wireless-points-bulk-validate
   */
  async post(validateMultipleWirelessPointsRequest: ValidateMultipleWirelessPointsRequest): Promise<ValidateMultipleWirelessPointsResponse> {
    return this.rc.post(this.path(), validateMultipleWirelessPointsRequest)
  }
}

export default Index
