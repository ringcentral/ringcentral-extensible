import GlipCreateTask from '../../../../../definitions/GlipCreateTask'
import GlipTaskInfo from '../../../../../definitions/GlipTaskInfo'
import GlipTaskList from '../../../../../definitions/GlipTaskList'
import Parent from '..'
import RestClient from '../../../../..'

class Index {
  rc: RestClient
  parent: Parent

  Index(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  string path() {
    return `${this.parent.path()}/tasks`
  }

  /**
   * Operation: Get Chat Tasks
   * Http get /restapi/v1.0/glip/chats/{chatId}/tasks
   */
  async get(ListChatTasksParameters queryParams = null): Promise<GlipTaskList> {
    return this.rc.get(this.path(), queryParams)
  }

  /**
   * Operation: Create Task
   * Http post /restapi/v1.0/glip/chats/{chatId}/tasks
   */
  async post(GlipCreateTask glipCreateTask): Promise<GlipTaskInfo> {
    return this.rc.post(this.path(), glipCreateTask)
  }
}

export default Index
