import type MessageDetailsResponse from '../../../../../definitions/MessageDetailsResponse';
import type MessageListResponse from '../../../../../definitions/MessageListResponse';
import type ListA2PSMSParameters from '../../../../../definitions/ListA2PSMSParameters';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public messageId: string | null;

  public constructor(_parent: ParentInterface, messageId: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.messageId = messageId;
  }

  public path(withParameter = true): string {
    if (withParameter && this.messageId !== null) {
      return `${this._parent.path()}/messages/${this.messageId}`;
    }
    return `${this._parent.path()}/messages`;
  }

  /**
   * Returns the list of outbound/inbound A2P messages sent from/to A2P phone numbers of the current account. The list can be filtered by message batch ID and/or phone number.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/a2p-sms/messages
   * Rate Limit Group: Light
   * App Permission: A2PSMS
   */
  public async list(
    queryParams?: ListA2PSMSParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<MessageListResponse> {
    const r = await this.rc.get<MessageListResponse>(this.path(false), queryParams, restRequestConfig);
    return r.data;
  }

  /**
   * Returns the details of an A2P SMS message by ID.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/a2p-sms/messages/{messageId}
   * Rate Limit Group: Light
   * App Permission: A2PSMS
   */
  public async get(restRequestConfig?: RestRequestConfig): Promise<MessageDetailsResponse> {
    if (this.messageId === null) {
      throw new Error('messageId must be specified.');
    }
    const r = await this.rc.get<MessageDetailsResponse>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
