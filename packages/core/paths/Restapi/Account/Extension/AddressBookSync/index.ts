import {RestRequestConfig} from '../../../../../Rest';
import {
  AddressBookSync,
  SyncAddressBookParameters,
} from '../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../..';

class Index {
  rc: RingCentral;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/address-book-sync`;
  }

  /**
   * Operation: Address Book Synchronization
   * Rate Limit Group: Heavy
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book-sync
   */
  async get(
    queryParams?: SyncAddressBookParameters,
    config?: RestRequestConfig
  ): Promise<AddressBookSync> {
    const r = await this.rc.get<AddressBookSync>(
      this.path(),
      queryParams,
      config
    );
    return r.data;
  }
}

export default Index;
