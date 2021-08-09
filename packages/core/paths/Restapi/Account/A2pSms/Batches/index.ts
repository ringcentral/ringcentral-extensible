import {RestRequestConfig} from '../../../../../Rest';
import {
  ListA2PBatchesParameters,
  MessageBatchListResponse,
  CreateSMSMessageBatchRequest,
  MessageBatchInfo,
} from '../../../../../definitions';
import Parent from '..';
import {RingCentral} from '../../../../..';

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
      return `${this.parent.path()}/batches/${this.batchId}`;
    }
    return `${this.parent.path()}/batches`;
  }
  /**
   * Returns the list of A2P batches sent from the current account. The list can be filtered by message batch ID and/or from phone number.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/a2p-sms/batches
   * Rate Limit Group: Light
   * App Permission: A2PSMS
   */
  async list(
    queryParams?: ListA2PBatchesParameters,
    restRequestConfig?: RestRequestConfig
  ): Promise<MessageBatchListResponse> {
    const r = await this.rc.get<MessageBatchListResponse>(
      this.path(false),
      queryParams,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Allows to send high volume of A2P (Application-to-Person) SMS messages (in message batches). Only phone number with the `A2PSmsSender` feature can be used as a sender.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/a2p-sms/batches
   * Rate Limit Group: Light
   * App Permission: A2PSMS
   */
  async post(
    createSMSMessageBatchRequest: CreateSMSMessageBatchRequest,
    restRequestConfig?: RestRequestConfig
  ): Promise<MessageBatchInfo> {
    const r = await this.rc.post<MessageBatchInfo>(
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
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/a2p-sms/batches/{batchId}
   * Rate Limit Group: Light
   * App Permission: A2PSMS
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<MessageBatchInfo> {
    if (this.batchId === null) {
      throw new Error('batchId must be specified.');
    }
    const r = await this.rc.get<MessageBatchInfo>(
      this.path(),
      undefined,
      restRequestConfig
    );
    return r.data;
  }
}
export default Index;
