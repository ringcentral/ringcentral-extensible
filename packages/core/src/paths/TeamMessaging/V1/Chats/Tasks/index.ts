import TMTaskInfo from '../../../../../definitions/TMTaskInfo';
import TMCreateTaskRequest from '../../../../../definitions/TMCreateTaskRequest';
import TMTaskList from '../../../../../definitions/TMTaskList';
import ListChatTasksNewParameters from '../../../../../definitions/ListChatTasksNewParameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }

  public path(withParameter = false): string {
    return `${this._parent.path()}/tasks`;
  }

  /**
   * Returns the list of tasks of the specified chat.
   * HTTP Method: get
   * Endpoint: /team-messaging/v1/chats/{chatId}/tasks
   * Rate Limit Group: Heavy
   * App Permission: TeamMessaging
   */
  public async get(queryParams?: ListChatTasksNewParameters, restRequestConfig?: RestRequestConfig): Promise<TMTaskList> {
    const r = await this.rc.get<TMTaskList>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }

  /**
   * Creates a task in the specified chat.
   * HTTP Method: post
   * Endpoint: /team-messaging/v1/chats/{chatId}/tasks
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  public async post(tMCreateTaskRequest: TMCreateTaskRequest, restRequestConfig?: RestRequestConfig): Promise<TMTaskInfo> {
    const r = await this.rc.post<TMTaskInfo>(this.path(), tMCreateTaskRequest, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;