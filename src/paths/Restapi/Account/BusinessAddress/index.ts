import { AccountBusinessAddressResource, ModifyAccountBusinessAddressRequest } from '../../../../definitions'
import Parent from '..'
import RestClient from '../../../..'

class BusinessAddress {
  rc: RestClient
  parent: Parent

  constructor (parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path (): string {
    return `${this.parent.path()}/business-address`
  }

  /**
   * Operation: Get Account Business Address
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/business-address
   */
  async get (): Promise<AccountBusinessAddressResource> {
    return this.rc.get(this.path())
  }

  /**
   * Operation: Update Company Business Address
   * Rate Limit Group: Medium
   * Http put /restapi/v1.0/account/{accountId}/business-address
   */
  async put (modifyAccountBusinessAddressRequest: ModifyAccountBusinessAddressRequest): Promise<AccountBusinessAddressResource> {
    return this.rc.put(this.path(), modifyAccountBusinessAddressRequest)
  }
}

export default BusinessAddress
