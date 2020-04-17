import { AutomaticLocationUpdatesTaskInfo } from '../../../../../definitions'
import Parent from '..'
import RestClient from '../../../../..'

class Tasks {
  rc: RestClient
  taskId: string
  parent: Parent

  constructor(parent: Parent, taskId: string) {
    this.parent = parent
    this.rc = parent.rc
    this.taskId = taskId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.taskId) {
      return `${this.parent.path()}/tasks/${this.taskId}`
    }

    return `${this.parent.path()}/tasks`
  }

  /**
   * Operation: Get Emergency Map Configuration Task
   * Http get /restapi/v1.0/account/{accountId}/emergency-address-auto-update/tasks/{taskId}
   */
  async get(): Promise<AutomaticLocationUpdatesTaskInfo> {
    if (!this.taskId) {
      throw new Error('taskId must not be undefined')
    }

    return this.rc.get(this.path())
  }
}

export default Tasks
