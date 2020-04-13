import GlipUpdateTask from '../../../../definitions/GlipUpdateTask'
import GlipTaskList from '../../../../definitions/GlipTaskList'
import GlipTaskInfo from '../../../../definitions/GlipTaskInfo'
import Parent from '..'
import RestClient from '../../../..'

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
   * Operation: Get Task
   * Http get /restapi/v1.0/glip/tasks/{taskId}
   */
  async get(): Promise<GlipTaskInfo> {
    if (!this.taskId || this.taskId === null) {
      throw new Error("taskId must not be undefined or null")
    }

    return this.rc.get(this.path())
  }

  /**
   * Operation: Patch Task
   * Http patch /restapi/v1.0/glip/tasks/{taskId}
   */
  async patch(GlipUpdateTask glipUpdateTask): Promise<GlipTaskList> {
    if (!this.taskId || this.taskId === null) {
      throw new Error("taskId must not be undefined or null")
    }

    return this.rc.patch(this.path(), glipUpdateTask)
  }

  /**
   * Operation: Delete Task
   * Http delete /restapi/v1.0/glip/tasks/{taskId}
   */
  async delete(): Promise<string> {
    if (!this.taskId || this.taskId === null) {
      throw new Error("taskId must not be undefined or null")
    }

    return this.rc.delete(this.path())
  }
}

export default Index
