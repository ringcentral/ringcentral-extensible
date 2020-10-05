import {RestRequestConfig} from '../../../../../Rest';
import {
  GetSMSMessageInfoResponse,
  CreateMMSMessage,
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
    return `${this.parent.path()}/mms`;
  }

  /**
   * Operation: Send MMS
   * Rate Limit Group: Medium
   * Http post /restapi/v1.0/account/{accountId}/extension/{extensionId}/mms
   */
  async post(
    createMMSMessage: CreateMMSMessage,
    config?: RestRequestConfig
  ): Promise<GetSMSMessageInfoResponse> {
    const formData = Utils.getFormData(createMMSMessage);
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
