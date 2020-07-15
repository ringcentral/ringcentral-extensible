import {RestRequestConfig} from '../../../../../Rest';
import {
  GetMessageInfoResponse,
  CreateInternalTextMessageRequest,
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
   * Operation: Create Internal Text Message
   * Rate Limit Group: Medium
   * Http post /restapi/v1.0/account/{accountId}/extension/{extensionId}/company-pager
   */
  async post(
    createInternalTextMessageRequest: CreateInternalTextMessageRequest,
    config?: RestRequestConfig
  ): Promise<GetMessageInfoResponse> {
    const r = await this.rc.post<GetMessageInfoResponse>(
      this.path(),
      createInternalTextMessageRequest,
      undefined,
      config
    );
    return r.data;
  }
}

export default Index;
