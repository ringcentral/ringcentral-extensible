import {AutomaticLocationUpdatesTaskInfo} from '../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../..';

class Tasks {
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
   * Operation: Get Emergency Map Configuration Task
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/emergency-address-auto-update/tasks/{taskId}
   */
  async get(): Promise<AutomaticLocationUpdatesTaskInfo> {
    if (this.taskId === null) {
      throw new Error('taskId must be specified.');
    }

    const r = await this.rc.get<AutomaticLocationUpdatesTaskInfo>(this.path());
    return r.data;
  }
}

export default Tasks;
