import {RestRequestConfig} from '../../../../../Rest';
import {
  CreateInternalTextMessageRequest,
  GetInternalTextMessageInfoResponse,
} from '../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../..';

class Index {
  rc: RingCentral;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }
  path(): string {
    return `${this.parent.path()}/company-pager`;
  }
  /**
   * Creates and sends an internal text message.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/company-pager
   * Rate Limit Group: Medium
   * App Permission: InternalMessages
   * User Permission: InternalSMS
   */
  async post(
    createInternalTextMessageRequest: CreateInternalTextMessageRequest,
    restRequestConfig?: RestRequestConfig
  ): Promise<GetInternalTextMessageInfoResponse> {
    const r = await this.rc.post<GetInternalTextMessageInfoResponse>(
      this.path(),
      createInternalTextMessageRequest,
      undefined,
      restRequestConfig
    );
    return r.data;
  }
}
export default Index;
