import Complete from './Complete';
import TMTaskList from '../../../../definitions/TMTaskList';
import TMUpdateTaskRequest from '../../../../definitions/TMUpdateTaskRequest';
import TMTaskInfo from '../../../../definitions/TMTaskInfo';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  taskId: string | null;

  constructor(parent: ParentInterface, taskId: string | null = null) {
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
   * Returns information about the specified task(s) by ID(s).
   * HTTP Method: get
   * Endpoint: /team-messaging/v1/tasks/{taskId}
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<TMTaskInfo> {
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
  async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
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
  async patch(tMUpdateTaskRequest: TMUpdateTaskRequest, restRequestConfig?: RestRequestConfig): Promise<TMTaskList> {
    if (this.taskId === null) {
      throw new Error('taskId must be specified.');
    }
    const r = await this.rc.patch<TMTaskList>(this.path(), tMUpdateTaskRequest, undefined, restRequestConfig);
    return r.data;
  }

  complete(): Complete {
    return new Complete(this);
  }
}
export default Index;
