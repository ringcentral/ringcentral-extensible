import Complete from './Complete'
import { GlipTaskInfo, GlipTaskList, GlipUpdateTask } from '../../../../definitions'
import Parent from '..'
import RestClient from '../../../..'

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
   * Operation: Get Task
   * Http get /restapi/v1.0/glip/tasks/{taskId}
   */
  async get(): Promise<GlipTaskInfo> {
    if (!this.taskId) {
      throw new Error('taskId must not be undefined')
    }

    return this.rc.get(this.path())
  }

  /**
   * Operation: Patch Task
   * Http patch /restapi/v1.0/glip/tasks/{taskId}
   */
  async patch(glipUpdateTask: GlipUpdateTask): Promise<GlipTaskList> {
    if (!this.taskId) {
      throw new Error('taskId must not be undefined')
    }

    return this.rc.patch(this.path(), glipUpdateTask)
  }

  /**
   * Operation: Delete Task
   * Http delete /restapi/v1.0/glip/tasks/{taskId}
   */
  async delete(): Promise<string> {
    if (!this.taskId) {
      throw new Error('taskId must not be undefined')
    }

    return this.rc.delete(this.path())
  }

  complete(): Complete {
    return new Complete(this)
  }
}

export default Tasks
