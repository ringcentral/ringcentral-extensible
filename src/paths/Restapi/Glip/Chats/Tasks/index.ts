import GlipCreateTask from '../../../../../definitions/GlipCreateTask'
import GlipTaskInfo from '../../../../../definitions/GlipTaskInfo'
import ListChatTasksParameters from '../../../../../definitions/ListChatTasksParameters'
import GlipTaskList from '../../../../../definitions/GlipTaskList'
import Parent from '..'
import RestClient from '../../../../..'

class Index {
  rc: RestClient
  parent: Parent

  constructor(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path(): string {
    return `${this.parent.path()}/tasks`
  }

  /**
   * Operation: Get Chat Tasks
   * Http get /restapi/v1.0/glip/chats/{chatId}/tasks
   */
  async get(queryParams?: ListChatTasksParameters): Promise<GlipTaskList> {
    return this.rc.get(this.path(), queryParams)
  }

  /**
   * Operation: Create Task
   * Http post /restapi/v1.0/glip/chats/{chatId}/tasks
   */
  async post(glipCreateTask: GlipCreateTask): Promise<GlipTaskInfo> {
    return this.rc.post(this.path(), glipCreateTask)
  }
}

export default Index
