import { GlipTaskList, ListChatTasksParameters, GlipTaskInfo, GlipCreateTask } from '../../../../../definitions'
import Parent from '..'
import RestClient from '../../../../..'

class Tasks {
  rc: RestClient
  parent: Parent

  constructor (parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path (): string {
    return `${this.parent.path()}/tasks`
  }

  /**
   * Operation: Get Chat Tasks
   * Rate Limit Group: Heavy
   * Http get /restapi/v1.0/glip/chats/{chatId}/tasks
   */
  async get (queryParams?: ListChatTasksParameters): Promise<GlipTaskList> {
    return this.rc.get(this.path(), queryParams)
  }

  /**
   * Operation: Create Task
   * Rate Limit Group: Medium
   * Http post /restapi/v1.0/glip/chats/{chatId}/tasks
   */
  async post (glipCreateTask: GlipCreateTask): Promise<GlipTaskInfo> {
    return this.rc.post(this.path(), glipCreateTask)
  }
}

export default Tasks
