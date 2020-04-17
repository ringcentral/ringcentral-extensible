import SyncAddressBookParameters from '../../../../../definitions/SyncAddressBookParameters'
import Parent from '..'
import RestClient from '../../../../..'

class AddressBookSync {
  rc: RestClient
  parent: Parent

  constructor(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path(): string {
    return `${this.parent.path()}/address-book-sync`
  }

  /**
   * Operation: Address Book Synchronization
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book-sync
   */
  async get(queryParams?: SyncAddressBookParameters): Promise<AddressBookSync> {
    return this.rc.get(this.path(), queryParams)
  }
}

export default AddressBookSync
