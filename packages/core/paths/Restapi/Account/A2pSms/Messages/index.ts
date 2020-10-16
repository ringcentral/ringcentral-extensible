import {RestRequestConfig} from '../../../../../Rest';
import {
  MessageListResponse,
  ListA2PsmsParameters,
  MessageDetailsResponse,
} from '../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../..';

class Index {
  rc: RingCentral;
  messageId: string | null;
  parent: Parent;

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
   * Operation: Get A2P SMS List
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/a2p-sms/messages
   */
  async list(
    queryParams?: ListA2PsmsParameters,
    config?: RestRequestConfig
  ): Promise<MessageListResponse> {
    const r = await this.rc.get<MessageListResponse>(
      this.path(false),
      queryParams,
      config
    );
    return r.data;
  }

  /**
   * Operation: Get A2P SMS
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/a2p-sms/messages/{messageId}
   */
  async get(config?: RestRequestConfig): Promise<MessageDetailsResponse> {
    if (this.messageId === null) {
      throw new Error('messageId must be specified.');
    }

    const r = await this.rc.get<MessageDetailsResponse>(
      this.path(),
      undefined,
      config
    );
    return r.data;
  }
}

export default Index;
