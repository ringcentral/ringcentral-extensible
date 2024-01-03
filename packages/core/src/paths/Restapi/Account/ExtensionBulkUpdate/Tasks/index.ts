import type ExtensionBulkUpdateTaskResource from '../../../../../definitions/ExtensionBulkUpdateTaskResource';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

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
   * Returns a status of a task to update multiple extensions.
   *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension-bulk-update/tasks/{taskId}
   * Rate Limit Group: Light
   * App Permission: EditExtensions
   * User Permission: EditExtensionInfo
   */
  public async get(restRequestConfig?: RestRequestConfig): Promise<ExtensionBulkUpdateTaskResource> {
    if (this.taskId === null) {
      throw new Error('taskId must be specified.');
    }
    const r = await this.rc.get<ExtensionBulkUpdateTaskResource>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
