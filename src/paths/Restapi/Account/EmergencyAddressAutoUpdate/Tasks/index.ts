import AutomaticLocationUpdatesTaskInfo from '../../../../../definitions/AutomaticLocationUpdatesTaskInfo'
import Parent from '..'
import RestClient from '../../../../..'

class Index {
  rc: RestClient
  taskId: string
  parent: Parent

  constructor(parent: Parent, taskId: string = null) {
    this.parent = parent
    this.rc = parent.rc
    this.taskId = taskId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.taskId != null) {
      return `${this.parent.path()}/tasks/${this.taskId}`
    }

    return `${this.parent.path()}/tasks`
  }

  /**
   * Operation: Get Emergency Map Configuration Task
   * Http get /restapi/v1.0/account/{accountId}/emergency-address-auto-update/tasks/{taskId}
   */
  async get(): Promise<AutomaticLocationUpdatesTaskInfo> {
    if (!this.taskId || this.taskId === null) {
      throw new Error("taskId must not be undefined or null")
    }

    return this.rc.get(this.path())
  }
}

export default Index
