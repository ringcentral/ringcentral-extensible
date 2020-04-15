import UpdateMultipleSwitchesRequest from '../../../../../definitions/UpdateMultipleSwitchesRequest'
import UpdateMultipleSwitchesResponse from '../../../../../definitions/UpdateMultipleSwitchesResponse'
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
    return `${this.parent.path()}/switches-bulk-update`
  }

  /**
   * Operation: Update Multiple Switches
   * Http post /restapi/v1.0/account/{accountId}/emergency-address-auto-update/switches-bulk-update
   */
  async post(updateMultipleSwitchesRequest: UpdateMultipleSwitchesRequest): Promise<UpdateMultipleSwitchesResponse> {
    return this.rc.post(this.path(), updateMultipleSwitchesRequest)
  }
}

export default Index
