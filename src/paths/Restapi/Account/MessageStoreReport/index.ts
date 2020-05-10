import Archive from './Archive';
import {RestRequestConfig} from '../../../../Rest';
import {CreateMessageStoreReportRequest} from '../../../../definitions';
import Parent from '..';
import RingCentral from '../../../..';

class MessageStoreReport {
  rc: RingCentral;
  taskId: string | null;
  parent: Parent;

  constructor(parent: Parent, taskId: string | null = null) {
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
   * Operation: Create Message Store Report
   * Rate Limit Group: Heavy
   * Http post /restapi/v1.0/account/{accountId}/message-store-report
   */
  async post(
    createMessageStoreReportRequest: CreateMessageStoreReportRequest,
    config?: RestRequestConfig
  ): Promise<MessageStoreReport> {
    const r = await this.rc.post<MessageStoreReport>(
      this.path(false),
      createMessageStoreReportRequest,
      undefined,
      config
    );
    return r.data;
  }

  /**
   * Operation: Get Message Store Report Task
   * Rate Limit Group: Heavy
   * Http get /restapi/v1.0/account/{accountId}/message-store-report/{taskId}
   */
  async get(config?: RestRequestConfig): Promise<MessageStoreReport> {
    if (this.taskId === null) {
      throw new Error('taskId must be specified.');
    }

    const r = await this.rc.get<MessageStoreReport>(
      this.path(),
      undefined,
      config
    );
    return r.data;
  }

  archive(archiveId: string | null = null): Archive {
    return new Archive(this, archiveId);
  }
}

export default MessageStoreReport;
