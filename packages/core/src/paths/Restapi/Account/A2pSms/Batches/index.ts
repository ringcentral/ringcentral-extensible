import MessageBatchResponse from '../../../../../definitions/MessageBatchResponse';
import MessageBatchCreateRequest from '../../../../../definitions/MessageBatchCreateRequest';
import BatchListResponse from '../../../../../definitions/BatchListResponse';
import ListA2PBatchesParameters from '../../../../../definitions/ListA2PBatchesParameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  batchId: string | null;

  constructor(parent: ParentInterface, batchId: string | null = null) {
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
   * Returns the list of A2P batches sent from the current account.
 * The list can be filtered by message batch ID and/or from phone number.
 *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/a2p-sms/batches
   * Rate Limit Group: Light
   * App Permission: A2PSMS
   */
  async list(queryParams?: ListA2PBatchesParameters, restRequestConfig?: RestRequestConfig): Promise<BatchListResponse> {
    const r = await this.rc.get<BatchListResponse>(this.path(false), queryParams, restRequestConfig);
    return r.data;
  }

  /**
   * Allows to send high volume of A2P (Application-to-Person) SMS messages
 * (in message batches). Only phone number with the `A2PSmsSender` feature can
 * be used as a sender.
 *
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/a2p-sms/batches
   * Rate Limit Group: Light
   * App Permission: A2PSMS
   */
  async post(messageBatchCreateRequest: MessageBatchCreateRequest, restRequestConfig?: RestRequestConfig): Promise<MessageBatchResponse> {
    const r = await this.rc.post<MessageBatchResponse>(this.path(false), messageBatchCreateRequest, undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Returns information on a message batch.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/a2p-sms/batches/{batchId}
   * Rate Limit Group: Light
   * App Permission: A2PSMS
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<MessageBatchResponse> {
    if (this.batchId === null) {
      throw new Error('batchId must be specified.');
    }
    const r = await this.rc.get<MessageBatchResponse>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
