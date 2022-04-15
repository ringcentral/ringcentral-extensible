import Tasks from './Tasks';
import { RestRequestConfig } from '../../../../Rest';
import {
  AddressBookBulkUploadRequest,
  AddressBookBulkUploadResponse,
} from '../../../../definitions';
import Parent from '..';
import { RingCentral } from '../../../..';

class Index {
  rc: RingCentral;

  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/address-book-bulk-upload`;
  }

  /**
   * Uploads multiple contacts for multiple extensions at once. Maximum 500 extension, each up to 10000 contacts, can be updated per request.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/address-book-bulk-upload
   * Rate Limit Group: Heavy
   * App Permission: Contacts
   * User Permission: EditPersonalContacts
   */
  async post(
    addressBookBulkUploadRequest: AddressBookBulkUploadRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<AddressBookBulkUploadResponse> {
    const r = await this.rc.post<AddressBookBulkUploadResponse>(
      this.path(),
      addressBookBulkUploadRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  tasks(taskId: string | null = null): Tasks {
    return new Tasks(this, taskId);
  }
}
export default Index;
