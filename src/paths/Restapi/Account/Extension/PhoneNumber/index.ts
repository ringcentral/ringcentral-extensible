import { GetExtensionPhoneNumbersResponse, ListExtensionPhoneNumbersParameters } from '../../../../../definitions'
import Parent from '..'
import RestClient from '../../../../..'

class PhoneNumber {
  rc: RestClient
  parent: Parent

  constructor(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path(): string {
    return `${this.parent.path()}/phone-number`
  }

  /**
   * Operation: Get Extension Phone Number List
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/phone-number
   */
  async get(queryParams?: ListExtensionPhoneNumbersParameters): Promise<GetExtensionPhoneNumbersResponse> {
    return this.rc.get(this.path(), queryParams)
  }
}

export default PhoneNumber
