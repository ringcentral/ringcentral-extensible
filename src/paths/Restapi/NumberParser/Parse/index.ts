import { ParsePhoneNumberResponse, ParsePhoneNumberRequest, ParsePhoneNumberParameters } from '../../../../definitions'
import Parent from '..'
import RestClient from '../../../..'

class Parse {
  rc: RestClient
  parent: Parent

  constructor(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path(): string {
    return `${this.parent.path()}/parse`
  }

  /**
   * Operation: Parse Phone Number
   * Http post /restapi/v1.0/number-parser/parse
   */
  async post(parsePhoneNumberRequest: ParsePhoneNumberRequest, queryParams?: ParsePhoneNumberParameters): Promise<ParsePhoneNumberResponse> {
    return this.rc.post(this.path(), parsePhoneNumberRequest, queryParams)
  }
}

export default Parse
