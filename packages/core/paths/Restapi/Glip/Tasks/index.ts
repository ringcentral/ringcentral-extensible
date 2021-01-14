import Complete from './Complete';
import {RestRequestConfig} from '../../../../Rest';
import {
  GlipTaskInfo,
  GlipTaskList,
  GlipUpdateTask,
} from '../../../../definitions';
import Parent from '..';
import RingCentral from '../../../..';

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
   * Operation: Get Task
   * Rate Limit Group: Medium
   * Http get /restapi/v1.0/glip/tasks/{taskId}
   */
  async get(config?: RestRequestConfig): Promise<GlipTaskInfo> {
    if (this.taskId === null) {
      throw new Error('taskId must be specified.');
    }

    const r = await this.rc.get<GlipTaskInfo>(this.path(), undefined, config);
    return r.data;
  }

  /**
   * Operation: Delete Task
   * Rate Limit Group: Medium
   * Http delete /restapi/v1.0/glip/tasks/{taskId}
   */
  async delete(config?: RestRequestConfig): Promise<string> {
    if (this.taskId === null) {
      throw new Error('taskId must be specified.');
    }

    const r = await this.rc.delete<string>(this.path(), undefined, config);
    return r.data;
  }

  /**
   * Operation: Patch Task
   * Rate Limit Group: Medium
   * Http patch /restapi/v1.0/glip/tasks/{taskId}
   */
  async patch(
    glipUpdateTask: GlipUpdateTask,
    config?: RestRequestConfig
  ): Promise<GlipTaskList> {
    if (this.taskId === null) {
      throw new Error('taskId must be specified.');
    }

    const r = await this.rc.patch<GlipTaskList>(
      this.path(),
      glipUpdateTask,
      undefined,
      config
    );
    return r.data;
  }

  complete(): Complete {
    return new Complete(this);
  }
}

export default Index;
