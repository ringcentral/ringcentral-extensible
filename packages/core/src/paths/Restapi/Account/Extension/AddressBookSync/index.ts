import { RestRequestConfig } from '../../../../../Rest';
import {
  SyncAddressBookParameters,
  AddressBookSync,
} from '../../../../../definitions';
import Parent from '..';
import { RingCentral } from '../../../../..';

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
   * Synchronizes user contacts.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/address-book-sync
   * Rate Limit Group: Heavy
   * App Permission: ReadContacts
   * User Permission: ReadPersonalContacts
   */
  async get(
    queryParams?: SyncAddressBookParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<AddressBookSync> {
    const r = await this.rc.get<AddressBookSync>(
      this.path(),
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
