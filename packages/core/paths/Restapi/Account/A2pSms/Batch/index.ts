import {RestRequestConfig} from '../../../../../Rest';
import {
  CreateSMSMessageBatchRequest,
  CreateMessageBatchResponse,
  MessageBatchResponse,
} from '../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../..';

class Index {
  rc: RingCentral;
  parent: Parent;
  batchId: string | null;

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
   * Allows to send high volume of A2P (Application-to-Person) SMS messages (in message batches). Only phone number with the `A2PSmsSender` feature can be used as a sender.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/a2p-sms/batch
   * Rate Limit Group: Light
   * App Permission: A2PSMS
   */
  async post(
    createSMSMessageBatchRequest: CreateSMSMessageBatchRequest,
    restRequestConfig?: RestRequestConfig
  ): Promise<CreateMessageBatchResponse> {
    const r = await this.rc.post<CreateMessageBatchResponse>(
      this.path(false),
      createSMSMessageBatchRequest,
      undefined,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Returns information on a message batch.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/a2p-sms/batch/{batchId}
   * Rate Limit Group: Light
   * App Permission: A2PSMS
   */
  async get(
    restRequestConfig?: RestRequestConfig
  ): Promise<MessageBatchResponse> {
    if (this.batchId === null) {
      throw new Error('batchId must be specified.');
    }

    const r = await this.rc.get<MessageBatchResponse>(
      this.path(),
      undefined,
      restRequestConfig
    );
    return r.data;
  }
}

export default Index;
