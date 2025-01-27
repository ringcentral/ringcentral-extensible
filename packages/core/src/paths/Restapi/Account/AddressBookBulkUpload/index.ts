import Tasks from "./Tasks/index.js";
import AddressBookBulkUploadResponse from "../../../../definitions/AddressBookBulkUploadResponse.js";
import AddressBookBulkUploadRequest from "../../../../definitions/AddressBookBulkUploadRequest.js";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/address-book-bulk-upload`;
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
  public async post(
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

  public tasks(taskId: string | null = null): Tasks {
    return new Tasks(this, taskId);
  }
}
export default Index;
