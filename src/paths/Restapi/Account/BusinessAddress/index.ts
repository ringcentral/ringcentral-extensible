import ModifyAccountBusinessAddressRequest from '../../../../definitions/ModifyAccountBusinessAddressRequest'
import AccountBusinessAddressResource from '../../../../definitions/AccountBusinessAddressResource'
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
    return `${this.parent.path()}/business-address`
  }

  /**
   * Operation: Get Account Business Address
   * Http get /restapi/v1.0/account/{accountId}/business-address
   */
  async get(): Promise<AccountBusinessAddressResource> {
    return this.rc.get(this.path())
  }

  /**
   * Operation: Update Company Business Address
   * Http put /restapi/v1.0/account/{accountId}/business-address
   */
  async put(ModifyAccountBusinessAddressRequest modifyAccountBusinessAddressRequest): Promise<AccountBusinessAddressResource> {
    return this.rc.put(this.path(), modifyAccountBusinessAddressRequest)
  }
}

export default Index
