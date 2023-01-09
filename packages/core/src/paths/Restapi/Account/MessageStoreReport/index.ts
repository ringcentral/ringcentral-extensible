import Archive from './Archive';
import MessageStoreReport from '../../../../definitions/MessageStoreReport';
import CreateMessageStoreReportRequest from '../../../../definitions/CreateMessageStoreReportRequest';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  taskId: string | null;

  constructor(parent: ParentInterface, taskId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.taskId = taskId;
  }

  path(withParameter = true): string {
    if (withParameter && this.taskId !== null) {
      return `${this.parent.path()}/message-store-report/${this.taskId}`;
    }
    return `${this.parent.path()}/message-store-report`;
  }

  /**
   * Creates a task to collect all account messages within the specified
 * time interval. Maximum number of simultaneous tasks per account is 2.
 *
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/message-store-report
   * Rate Limit Group: Heavy
   * App Permission: ReadMessages
   * User Permission: Users
   */
  async post(createMessageStoreReportRequest: CreateMessageStoreReportRequest, restRequestConfig?: RestRequestConfig): Promise<MessageStoreReport> {
    const r = await this.rc.post<MessageStoreReport>(this.path(false), createMessageStoreReportRequest, undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Returns the current status of a task on report creation.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/message-store-report/{taskId}
   * Rate Limit Group: Heavy
   * App Permission: ReadMessages
   * User Permission: Users
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<MessageStoreReport> {
    if (this.taskId === null) {
      throw new Error('taskId must be specified.');
    }
    const r = await this.rc.get<MessageStoreReport>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  archive(archiveId: (string | null) = null): Archive {
    return new Archive(this, archiveId);
  }
}
export default Index;
