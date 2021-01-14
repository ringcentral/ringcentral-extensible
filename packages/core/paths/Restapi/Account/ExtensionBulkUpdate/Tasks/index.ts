import {RestRequestConfig} from '../../../../../Rest';
import {ExtensionBulkUpdateTaskResource} from '../../../../../definitions';
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
   * Operation: Get Update Task Status
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/extension-bulk-update/tasks/{taskId}
   */
  async get(
    config?: RestRequestConfig
  ): Promise<ExtensionBulkUpdateTaskResource> {
    if (this.taskId === null) {
      throw new Error('taskId must be specified.');
    }

    const r = await this.rc.get<ExtensionBulkUpdateTaskResource>(
      this.path(),
      undefined,
      config
    );
    return r.data;
  }
}

export default Index;
