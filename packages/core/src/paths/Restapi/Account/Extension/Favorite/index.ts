import FavoriteCollection from "../../../../../definitions/FavoriteCollection";
import FavoriteContactList from "../../../../../definitions/FavoriteContactList";
import {
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
    return `${this._parent.path()}/favorite`;
  }
  /**
   * Returns the list of favorite contacts of the current extension.
   * Favorite contacts include both company contacts (extensions) and personal
   * contacts (address book records).
   *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/favorite
   * Rate Limit Group: Light
   * App Permission: ReadContacts
   * User Permission: ReadPersonalContacts
   */
  public async get(
    restRequestConfig?: RestRequestConfig,
  ): Promise<FavoriteContactList> {
    const r = await this.rc.get<FavoriteContactList>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Updates the list of favorite contacts of the current extension.
   * Favorite contacts include both company contacts (extensions) and personal
   * contacts (address book records).**Please note**: Currently personal address
   * book size is limited to 10 000 contacts.
   *
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/favorite
   * Rate Limit Group: Medium
   * App Permission: Contacts
   * User Permission: EditPersonalContacts
   */
  public async put(
    favoriteCollection: FavoriteCollection,
    restRequestConfig?: RestRequestConfig,
  ): Promise<FavoriteContactList> {
    const r = await this.rc.put<FavoriteContactList>(
      this.path(),
      favoriteCollection,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
