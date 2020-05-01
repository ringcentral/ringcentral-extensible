import {
  GetMessageInfoResponse,
  CreateSMSMessage,
} from '../../../../../definitions';
import Parent from '..';
import RestClient from '../../../../..';

class Sms {
  rc: RestClient;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/sms`;
  }

  /**
   * Operation: Send SMS
   * Rate Limit Group: Medium
   * Http post /restapi/v1.0/account/{accountId}/extension/{extensionId}/sms
   */
  async post(
    createSMSMessage: CreateSMSMessage
  ): Promise<GetMessageInfoResponse> {
    const r = await this.rc.post(this.path(), createSMSMessage);
    return r.data;
  }
}

export default Sms;
