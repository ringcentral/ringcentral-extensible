import FavoriteCollection from '../../../../../definitions/FavoriteCollection';
import FavoriteContactList from '../../../../../definitions/FavoriteContactList';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/favorite`;
  }

  /**
   * Returns the list of favorite contacts of the current extension. Favorite contacts include both company contacts (extensions) and personal contacts (address book records).
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/favorite
   * Rate Limit Group: Light
   * App Permission: ReadContacts
   * User Permission: ReadPersonalContacts
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<FavoriteContactList> {
    const r = await this.rc.get<FavoriteContactList>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Updates the list of favorite contacts of the current extension. Favorite contacts include both company contacts (extensions) and personal contacts (address book records).**Please note**: currently personal address book size is limited to 10 000 contacts.
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/favorite
   * Rate Limit Group: Medium
   * App Permission: Contacts
   * User Permission: EditPersonalContacts
   */
  async put(favoriteCollection: FavoriteCollection, restRequestConfig?: RestRequestConfig): Promise<FavoriteContactList> {
    const r = await this.rc.put<FavoriteContactList>(this.path(), favoriteCollection, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
