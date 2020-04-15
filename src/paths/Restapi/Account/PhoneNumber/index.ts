import CompanyPhoneNumberInfo from '../../../../definitions/CompanyPhoneNumberInfo'
import ListAccountPhoneNumbersParameters from '../../../../definitions/ListAccountPhoneNumbersParameters'
import AccountPhoneNumbers from '../../../../definitions/AccountPhoneNumbers'
import Parent from '..'
import RestClient from '../../../..'

class Index {
  rc: RestClient
  phoneNumberId: string
  parent: Parent

  constructor(parent: Parent, phoneNumberId: string = null) {
    this.parent = parent
    this.rc = parent.rc
    this.phoneNumberId = phoneNumberId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.phoneNumberId !== null) {
      return `${this.parent.path()}/phone-number/${this.phoneNumberId}`
    }

    return `${this.parent.path()}/phone-number`
  }

  /**
   * Operation: Get Company Phone Number List
   * Http get /restapi/v1.0/account/{accountId}/phone-number
   */
  async list(queryParams?: ListAccountPhoneNumbersParameters): Promise<AccountPhoneNumbers> {
    return this.rc.get(this.path(false), queryParams)
  }

  /**
   * Operation: Get Phone Number
   * Http get /restapi/v1.0/account/{accountId}/phone-number/{phoneNumberId}
   */
  async get(): Promise<CompanyPhoneNumberInfo> {
    if (this.phoneNumberId === undefined || this.phoneNumberId === null) {
      throw new Error("phoneNumberId must not be undefined or null")
    }

    return this.rc.get(this.path())
  }
}

export default Index
