import {RestRequestConfig} from '../../../../../Rest';
import {
  GetMessageInfoResponse,
  CreateSMSMessage,
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
    return `${this.parent.path()}/sms`;
  }

  /**
   * Operation: Send SMS
   * Rate Limit Group: Medium
   * Http post /restapi/v1.0/account/{accountId}/extension/{extensionId}/sms
   */
  async post(
    createSMSMessage: CreateSMSMessage,
    config?: RestRequestConfig
  ): Promise<GetMessageInfoResponse> {
    const r = await this.rc.post<GetMessageInfoResponse>(
      this.path(),
      createSMSMessage,
      undefined,
      config
    );
    return r.data;
  }
}

export default Index;
