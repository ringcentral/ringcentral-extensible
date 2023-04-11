import GetInternalTextMessageInfoResponse from '../../../../../definitions/GetInternalTextMessageInfoResponse';
import CreateInternalTextMessageRequest from '../../../../../definitions/CreateInternalTextMessageRequest';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/company-pager`;
  }

  /**
   * Creates and sends an internal text message (company pager message).
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/company-pager
   * Rate Limit Group: Medium
   * App Permission: InternalMessages
   * User Permission: InternalSMS
   */
  async post(createInternalTextMessageRequest: CreateInternalTextMessageRequest, restRequestConfig?: RestRequestConfig): Promise<GetInternalTextMessageInfoResponse> {
    const r = await this.rc.post<GetInternalTextMessageInfoResponse>(this.path(), createInternalTextMessageRequest, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
