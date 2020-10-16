import {RestRequestConfig} from '../../../../../Rest';
import {
  GetSMSMessageInfoResponse,
  CreateSMSMessage,
} from '../../../../../definitions';
import Utils from '../../../../../Utils';
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
  ): Promise<GetSMSMessageInfoResponse> {
    const formData = Utils.getFormData(createSMSMessage);
    const r = await this.rc.post<GetSMSMessageInfoResponse>(
      this.path(),
      formData,
      undefined,
      config
    );
    return r.data;
  }
}

export default Index;
