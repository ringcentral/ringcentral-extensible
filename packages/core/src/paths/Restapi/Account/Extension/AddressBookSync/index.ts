import AddressBookSync from '../../../../../definitions/AddressBookSync';
import SyncAddressBookParameters from '../../../../../definitions/SyncAddressBookParameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/address-book-sync`;
  }

  /**
   * Synchronizes user contacts.
 *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/address-book-sync
   * Rate Limit Group: Heavy
   * App Permission: ReadContacts
   * User Permission: ReadPersonalContacts
   */
  async get(queryParams?: SyncAddressBookParameters, restRequestConfig?: RestRequestConfig): Promise<AddressBookSync> {
    const r = await this.rc.get<AddressBookSync>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;
