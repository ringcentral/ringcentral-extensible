import Complete from './Complete';
import {RestRequestConfig} from '../../../../Rest';
import {
  GlipTaskInfo,
  GlipUpdateTask,
  GlipTaskList,
} from '../../../../definitions';
import Parent from '..';
import RingCentral from '../../../..';

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
   * Returns information about the specified task(s) by ID(s).
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/glip/tasks/{taskId}
   * Rate Limit Group: Medium
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<GlipTaskInfo> {
    if (this.taskId === null) {
      throw new Error('taskId must be specified.');
    }

    const r = await this.rc.get<GlipTaskInfo>(
      this.path(),
      undefined,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Deletes the specified task.
   * HTTP Method: delete
   * Endpoint: /restapi/{apiVersion}/glip/tasks/{taskId}
   * Rate Limit Group: Medium
   */
  async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.taskId === null) {
      throw new Error('taskId must be specified.');
    }

    const r = await this.rc.delete<string>(
      this.path(),
      undefined,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Updates the specified task by ID.
   * HTTP Method: patch
   * Endpoint: /restapi/{apiVersion}/glip/tasks/{taskId}
   * Rate Limit Group: Medium
   */
  async patch(
    glipUpdateTask: GlipUpdateTask,
    restRequestConfig?: RestRequestConfig
  ): Promise<GlipTaskList> {
    if (this.taskId === null) {
      throw new Error('taskId must be specified.');
    }

    const r = await this.rc.patch<GlipTaskList>(
      this.path(),
      glipUpdateTask,
      undefined,
      restRequestConfig
    );
    return r.data;
  }

  complete(): Complete {
    return new Complete(this);
  }
}

export default Index;
