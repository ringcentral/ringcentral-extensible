import MessageDetailsResponse from '../../../../../definitions/MessageDetailsResponse';
import MessageListResponse from '../../../../../definitions/MessageListResponse';
import ListA2PSMSParameters from '../../../../../definitions/ListA2PSMSParameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  messageId: string | null;

  constructor(parent: ParentInterface, messageId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.messageId = messageId;
  }

  path(withParameter = true): string {
    if (withParameter && this.messageId !== null) {
      return `${this.parent.path()}/messages/${this.messageId}`;
    }
    return `${this.parent.path()}/messages`;
  }

  /**
   * Returns the list of outbound/inbound A2P messages sent from/to A2P phone numbers of the current account. The list can be filtered by message batch ID and/or phone number.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/a2p-sms/messages
   * Rate Limit Group: Light
   * App Permission: A2PSMS
   */
  async list(queryParams?: ListA2PSMSParameters, restRequestConfig?: RestRequestConfig): Promise<MessageListResponse> {
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
  async get(restRequestConfig?: RestRequestConfig): Promise<MessageDetailsResponse> {
    if (this.messageId === null) {
      throw new Error('messageId must be specified.');
    }
    const r = await this.rc.get<MessageDetailsResponse>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
