import { ValidateMultipleSwitchesResponse, ValidateMultipleSwitchesRequest } from '../../../../../definitions'
import Parent from '..'
import RestClient from '../../../../..'

class SwitchesBulkValidate {
  rc: RestClient
  parent: Parent

  constructor(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path(): string {
    return `${this.parent.path()}/switches-bulk-validate`
  }

  /**
   * Operation: Validate Multiple Switches
   * Http post /restapi/v1.0/account/{accountId}/emergency-address-auto-update/switches-bulk-validate
   */
  async post(validateMultipleSwitchesRequest: ValidateMultipleSwitchesRequest): Promise<ValidateMultipleSwitchesResponse> {
    return this.rc.post(this.path(), validateMultipleSwitchesRequest)
  }
}

export default SwitchesBulkValidate
