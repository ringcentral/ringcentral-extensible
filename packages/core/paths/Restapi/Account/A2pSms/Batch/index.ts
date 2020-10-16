import {RestRequestConfig} from '../../../../../Rest';
import {
  MessageBatchResponse,
  MessageBatchCreateRequest,
} from '../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../..';

class Index {
  rc: RingCentral;
  batchId: string | null;
  parent: Parent;

  constructor(parent: Parent, batchId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.batchId = batchId;
  }

  path(withParameter = true): string {
    if (withParameter && this.batchId !== null) {
      return `${this.parent.path()}/batch/${this.batchId}`;
    }

    return `${this.parent.path()}/batch`;
  }

  /**
   * Operation: Send A2P SMS
   * Rate Limit Group: Light
   * Http post /restapi/v1.0/account/{accountId}/a2p-sms/batch
   */
  async post(
    messageBatchCreateRequest: MessageBatchCreateRequest,
    config?: RestRequestConfig
  ): Promise<MessageBatchResponse> {
    const r = await this.rc.post<MessageBatchResponse>(
      this.path(false),
      messageBatchCreateRequest,
      undefined,
      config
    );
    return r.data;
  }

  /**
   * Operation: Get A2P SMS Batch
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/a2p-sms/batch/{batchId}
   */
  async get(config?: RestRequestConfig): Promise<MessageBatchResponse> {
    if (this.batchId === null) {
      throw new Error('batchId must be specified.');
    }

    const r = await this.rc.get<MessageBatchResponse>(
      this.path(),
      undefined,
      config
    );
    return r.data;
  }
}

export default Index;
