import AddressBookBulkUploadResponse from "../../../../../definitions/AddressBookBulkUploadResponse.js";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public taskId: string | null;

  public constructor(_parent: ParentInterface, taskId: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.taskId = taskId;
  }
  public path(withParameter = true): string {
    if (withParameter && this.taskId !== null) {
      return `${this._parent.path()}/tasks/${this.taskId}`;
    }
    return `${this._parent.path()}/tasks`;
  }
  /**
   * Returns the status of a task on adding multiple contacts to multiple extensions.
   *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/address-book-bulk-upload/tasks/{taskId}
   * Rate Limit Group: Light
   * App Permission: Contacts
   * User Permission: EditPersonalContacts
   */
  public async get(
    restRequestConfig?: RestRequestConfig,
  ): Promise<AddressBookBulkUploadResponse> {
    if (this.taskId === null) {
      throw new Error("taskId must be specified.");
    }
    const r = await this.rc.get<AddressBookBulkUploadResponse>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
