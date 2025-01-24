import type MessageBatchResponse from "../../../../../definitions/MessageBatchResponse";
import type MessageBatchCreateRequest from "../../../../../definitions/MessageBatchCreateRequest";
import type BatchListResponse from "../../../../../definitions/BatchListResponse";
import type ListA2PBatchesParameters from "../../../../../definitions/ListA2PBatchesParameters";
import type {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../types";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public batchId: string | null;

  public constructor(_parent: ParentInterface, batchId: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.batchId = batchId;
  }
  public path(withParameter = true): string {
    if (withParameter && this.batchId !== null) {
      return `${this._parent.path()}/batches/${this.batchId}`;
    }
    return `${this._parent.path()}/batches`;
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
  public async list(
    queryParams?: ListA2PBatchesParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<BatchListResponse> {
    const r = await this.rc.get<BatchListResponse>(
      this.path(false),
      queryParams,
      restRequestConfig,
    );
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
  public async post(
    messageBatchCreateRequest: MessageBatchCreateRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<MessageBatchResponse> {
    const r = await this.rc.post<MessageBatchResponse>(
      this.path(false),
      messageBatchCreateRequest,
      undefined,
      restRequestConfig,
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
  public async get(
    restRequestConfig?: RestRequestConfig,
  ): Promise<MessageBatchResponse> {
    if (this.batchId === null) {
      throw new Error("batchId must be specified.");
    }
    const r = await this.rc.get<MessageBatchResponse>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
