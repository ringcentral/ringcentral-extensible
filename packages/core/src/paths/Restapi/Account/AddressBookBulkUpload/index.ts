import Tasks from './Tasks';
import AddressBookBulkUploadResponse from '../../../../definitions/AddressBookBulkUploadResponse';
import AddressBookBulkUploadRequest from '../../../../definitions/AddressBookBulkUploadRequest';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/address-book-bulk-upload`;
  }

  /**
   * Uploads multiple contacts for multiple extensions at once.
 * Maximum 500 extensions can be uploaded per request. Max amount
 * of contacts that can be uploaded per extension is 10,000.
 * Each contact uploaded for a certain extension is not visible
 * to other extensions.
 *
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/address-book-bulk-upload
   * Rate Limit Group: Heavy
   * App Permission: Contacts
   * User Permission: EditPersonalContacts
   */
  async post(addressBookBulkUploadRequest: AddressBookBulkUploadRequest, restRequestConfig?: RestRequestConfig): Promise<AddressBookBulkUploadResponse> {
    const r = await this.rc.post<AddressBookBulkUploadResponse>(this.path(), addressBookBulkUploadRequest, undefined, restRequestConfig);
    return r.data;
  }

  tasks(taskId: (string | null) = null): Tasks {
    return new Tasks(this, taskId);
  }
}
export default Index;
