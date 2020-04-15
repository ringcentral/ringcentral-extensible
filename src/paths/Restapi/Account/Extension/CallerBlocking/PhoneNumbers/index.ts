import AddBlockedAllowedPhoneNumber from '../../../../../../definitions/AddBlockedAllowedPhoneNumber'
import BlockedAllowedPhoneNumberInfo from '../../../../../../definitions/BlockedAllowedPhoneNumberInfo'
import ListBlockedAllowedNumbersParameters from '../../../../../../definitions/ListBlockedAllowedNumbersParameters'
import BlockedAllowedPhoneNumbersList from '../../../../../../definitions/BlockedAllowedPhoneNumbersList'
import Parent from '..'
import RestClient from '../../../../../..'

class Index {
  rc: RestClient
  blockedNumberId: string
  parent: Parent

  constructor(parent: Parent, blockedNumberId: string = null) {
    this.parent = parent
    this.rc = parent.rc
    this.blockedNumberId = blockedNumberId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.blockedNumberId != null) {
      return `${this.parent.path()}/phone-numbers/${this.blockedNumberId}`
    }

    return `${this.parent.path()}/phone-numbers`
  }

  /**
   * Operation: Get Blocked/Allowed Phone Numbers
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers
   */
  async list(queryParams?: ListBlockedAllowedNumbersParameters): Promise<BlockedAllowedPhoneNumbersList> {
    return this.rc.get(this.path(false), queryParams)
  }

  /**
   * Operation: Add Blocked/Allowed Number
   * Http post /restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers
   */
  async post(addBlockedAllowedPhoneNumber: AddBlockedAllowedPhoneNumber): Promise<BlockedAllowedPhoneNumberInfo> {
    return this.rc.post(this.path(false), addBlockedAllowedPhoneNumber)
  }

  /**
   * Operation: Get Blocked/Allowed Number
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers/{blockedNumberId}
   */
  async get(): Promise<BlockedAllowedPhoneNumberInfo> {
    if (!this.blockedNumberId || this.blockedNumberId === null) {
      throw new Error("blockedNumberId must not be undefined or null")
    }

    return this.rc.get(this.path())
  }

  /**
   * Operation: Delete Blocked/Allowed Number
   * Http delete /restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers/{blockedNumberId}
   */
  async delete(): Promise<string> {
    if (!this.blockedNumberId || this.blockedNumberId === null) {
      throw new Error("blockedNumberId must not be undefined or null")
    }

    return this.rc.delete(this.path())
  }

  /**
   * Operation: Update Blocked/Allowed Number
   * Http put /restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers/{blockedNumberId}
   */
  async put(addBlockedAllowedPhoneNumber: AddBlockedAllowedPhoneNumber): Promise<BlockedAllowedPhoneNumberInfo> {
    if (!this.blockedNumberId || this.blockedNumberId === null) {
      throw new Error("blockedNumberId must not be undefined or null")
    }

    return this.rc.put(this.path(), addBlockedAllowedPhoneNumber)
  }
}

export default Index
