import Complete from './Complete';
import type TMTaskList from '../../../../definitions/TMTaskList';
import type TMUpdateTaskRequest from '../../../../definitions/TMUpdateTaskRequest';
import type TMTaskInfo from '../../../../definitions/TMTaskInfo';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

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
   * Returns information about the specified task(s) by ID(s).
   * HTTP Method: get
   * Endpoint: /team-messaging/v1/tasks/{taskId}
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  public async get(restRequestConfig?: RestRequestConfig): Promise<TMTaskInfo> {
    if (this.taskId === null) {
      throw new Error('taskId must be specified.');
    }
    const r = await this.rc.get<TMTaskInfo>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Deletes the specified task.
   * HTTP Method: delete
   * Endpoint: /team-messaging/v1/tasks/{taskId}
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  public async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.taskId === null) {
      throw new Error('taskId must be specified.');
    }
    const r = await this.rc.delete<string>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Updates the specified task by ID.
   * HTTP Method: patch
   * Endpoint: /team-messaging/v1/tasks/{taskId}
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  public async patch(
    tMUpdateTaskRequest: TMUpdateTaskRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<TMTaskList> {
    if (this.taskId === null) {
      throw new Error('taskId must be specified.');
    }
    const r = await this.rc.patch<TMTaskList>(this.path(), tMUpdateTaskRequest, undefined, restRequestConfig);
    return r.data;
  }

  public complete(): Complete {
    return new Complete(this);
  }
}
export default Index;
