import {RestRequestConfig} from '../../../../../Rest';
import {
  ListChatTasksParameters,
  GlipTaskList,
  GlipCreateTask,
  GlipTaskInfo,
} from '../../../../../definitions';
import Parent from '..';
import {RingCentral} from '../../../../..';

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
   * Returns the list of tasks of the specified chat.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/glip/chats/{chatId}/tasks
   * Rate Limit Group: Heavy
   */
  async get(
    queryParams?: ListChatTasksParameters,
    restRequestConfig?: RestRequestConfig
  ): Promise<GlipTaskList> {
    const r = await this.rc.get<GlipTaskList>(
      this.path(),
      queryParams,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Creates a task in the specified chat.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/glip/chats/{chatId}/tasks
   * Rate Limit Group: Medium
   */
  async post(
    glipCreateTask: GlipCreateTask,
    restRequestConfig?: RestRequestConfig
  ): Promise<GlipTaskInfo> {
    const r = await this.rc.post<GlipTaskInfo>(
      this.path(),
      glipCreateTask,
      undefined,
      restRequestConfig
    );
    return r.data;
  }
}
export default Index;
