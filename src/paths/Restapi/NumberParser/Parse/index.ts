import ParsePhoneNumberRequest from '../../../../definitions/ParsePhoneNumberRequest'
import ParsePhoneNumberResponse from '../../../../definitions/ParsePhoneNumberResponse'
import Parent from '..'
import RestClient from '../../../..'

class Index {
  rc: RestClient
  parent: Parent

  Index(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  string path() {
    return `${this.parent.path()}/parse`
  }

  /**
   * Operation: Parse Phone Number
   * Http post /restapi/v1.0/number-parser/parse
   */
  async post(ParsePhoneNumberRequest parsePhoneNumberRequest, ParsePhoneNumberParameters queryParams = null): Promise<ParsePhoneNumberResponse> {
    return this.rc.post(this.path(), parsePhoneNumberRequest, queryParams)
  }
}

export default Index
