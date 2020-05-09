import {
  GetMessageInfoResponse,
  CreateInternalTextMessageRequest,
} from '../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../..';

class CompanyPager {
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
    createInternalTextMessageRequest: CreateInternalTextMessageRequest
  ): Promise<GetMessageInfoResponse> {
    const r = await this.rc.post<GetMessageInfoResponse>(
      this.path(),
      createInternalTextMessageRequest
    );
    return r.data;
  }
}

export default CompanyPager;
