import { RestRequestConfig } from '../../../../../Rest';
import { AddressBookBulkUploadResponse } from '../../../../../definitions';
import Parent from '..';
import { RingCentral } from '../../../../..';

class Index {
  rc: RingCentral;

  parent: Parent;

  taskId: string | null;

  constructor(parent: Parent, taskId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.taskId = taskId;
  }

  path(withParameter = true): string {
    if (withParameter && this.taskId !== null) {
      return `${this.parent.path()}/tasks/${this.taskId}`;
    }
    return `${this.parent.path()}/tasks`;
  }

  /**
   * Returns the status of a task on adding multiple contacts to multiple extensions.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/address-book-bulk-upload/tasks/{taskId}
   * Rate Limit Group: Light
   * App Permission: Contacts
   * User Permission: EditPersonalContacts
   */
  async get(
    restRequestConfig?: RestRequestConfig,
  ): Promise<AddressBookBulkUploadResponse> {
    if (this.taskId === null) {
      throw new Error('taskId must be specified.');
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
