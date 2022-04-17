import { RestRequestConfig } from '../../../../../Rest';
import {
  ListA2PSMSParameters,
  MessageListResponse,
  MessageDetailsResponse,
} from '../../../../../definitions';
import Parent from '..';
import { RingCentral } from '../../../../..';

class Index {
  rc: RingCentral;

  parent: Parent;

  messageId: string | null;

  constructor(parent: Parent, messageId: string | null = null) {
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
  async list(
    queryParams?: ListA2PSMSParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<MessageListResponse> {
    const r = await this.rc.get<MessageListResponse>(
      this.path(false),
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Returns the details of an A2P SMS message by ID.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/a2p-sms/messages/{messageId}
   * Rate Limit Group: Light
   * App Permission: A2PSMS
   */
  async get(
    restRequestConfig?: RestRequestConfig,
  ): Promise<MessageDetailsResponse> {
    if (this.messageId === null) {
      throw new Error('messageId must be specified.');
    }
    const r = await this.rc.get<MessageDetailsResponse>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
