import CreateMultipleSwitchesRequest from '../../../../../definitions/CreateMultipleSwitchesRequest'
import CreateMultipleSwitchesResponse from '../../../../../definitions/CreateMultipleSwitchesResponse'
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
    return `${this.parent.path()}/switches-bulk-create`
  }

  /**
   * Operation: Create Multiple Switches
   * Http post /restapi/v1.0/account/{accountId}/emergency-address-auto-update/switches-bulk-create
   */
  async post(createMultipleSwitchesRequest: CreateMultipleSwitchesRequest): Promise<CreateMultipleSwitchesResponse> {
    return this.rc.post(this.path(), createMultipleSwitchesRequest)
  }
}

export default Index
