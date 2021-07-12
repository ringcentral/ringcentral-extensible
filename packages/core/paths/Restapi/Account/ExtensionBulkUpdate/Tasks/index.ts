import {RestRequestConfig} from '../../../../../Rest';
import {ExtensionBulkUpdateTaskResource} from '../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../..';

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
   * Returns the status of multiple extension update task
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension-bulk-update/tasks/{taskId}
   * Rate Limit Group: Light
   * App Permission: EditExtensions
   * User Permission: EditExtensionInfo
   */
  async get(
    restRequestConfig?: RestRequestConfig
  ): Promise<ExtensionBulkUpdateTaskResource> {
    if (this.taskId === null) {
      throw new Error('taskId must be specified.');
    }
    const r = await this.rc.get<ExtensionBulkUpdateTaskResource>(
      this.path(),
      undefined,
      restRequestConfig
    );
    return r.data;
  }
}
export default Index;
