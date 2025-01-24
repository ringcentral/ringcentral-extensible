import type AddressBookSync from "../../../../../definitions/AddressBookSync";
import type SyncAddressBookParameters from "../../../../../definitions/SyncAddressBookParameters";
import type {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../types";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/address-book-sync`;
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
  public async get(
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
