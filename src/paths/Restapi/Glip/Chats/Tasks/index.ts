import {RestRequestConfig} from '../../../../../Rest';
import {
  GlipTaskList,
  ListChatTasksParameters,
  GlipTaskInfo,
  GlipCreateTask,
} from '../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../..';

class Index {
  rc: RingCentral;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/tasks`;
  }

  /**
   * Operation: Get Chat Tasks
   * Rate Limit Group: Heavy
   * Http get /restapi/v1.0/glip/chats/{chatId}/tasks
   */
  async get(
    queryParams?: ListChatTasksParameters,
    config?: RestRequestConfig
  ): Promise<GlipTaskList> {
    const r = await this.rc.get<GlipTaskList>(this.path(), queryParams, config);
    return r.data;
  }

  /**
   * Operation: Create Task
   * Rate Limit Group: Medium
   * Http post /restapi/v1.0/glip/chats/{chatId}/tasks
   */
  async post(
    glipCreateTask: GlipCreateTask,
    config?: RestRequestConfig
  ): Promise<GlipTaskInfo> {
    const r = await this.rc.post<GlipTaskInfo>(
      this.path(),
      glipCreateTask,
      undefined,
      config
    );
    return r.data;
  }
}

export default Index;
