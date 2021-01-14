import Tasks from './Tasks';
import {RestRequestConfig} from '../../../../Rest';
import {
  AddressBookBulkUploadResponse,
  AddressBookBulkUploadRequest,
} from '../../../../definitions';
import Parent from '..';
import RingCentral from '../../../..';

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
   * Operation: Update Multiple Contacts
   * Rate Limit Group: Heavy
   * Http post /restapi/v1.0/account/{accountId}/address-book-bulk-upload
   */
  async post(
    addressBookBulkUploadRequest: AddressBookBulkUploadRequest,
    config?: RestRequestConfig
  ): Promise<AddressBookBulkUploadResponse> {
    const r = await this.rc.post<AddressBookBulkUploadResponse>(
      this.path(),
      addressBookBulkUploadRequest,
      undefined,
      config
    );
    return r.data;
  }

  tasks(taskId: string | null = null): Tasks {
    return new Tasks(this, taskId);
  }
}

export default Index;
