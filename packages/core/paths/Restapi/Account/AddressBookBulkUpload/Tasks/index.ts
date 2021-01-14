import {RestRequestConfig} from '../../../../../Rest';
import {AddressBookBulkUploadResponse} from '../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../..';

class Index {
  rc: RingCentral;
  taskId: string | null;
  parent: Parent;

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
   * Operation: Get Contacts Update Task
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/address-book-bulk-upload/tasks/{taskId}
   */
  async get(
    config?: RestRequestConfig
  ): Promise<AddressBookBulkUploadResponse> {
    if (this.taskId === null) {
      throw new Error('taskId must be specified.');
    }

    const r = await this.rc.get<AddressBookBulkUploadResponse>(
      this.path(),
      undefined,
      config
    );
    return r.data;
  }
}

export default Index;
