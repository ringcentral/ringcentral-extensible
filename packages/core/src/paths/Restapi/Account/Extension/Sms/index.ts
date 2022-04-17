import Utils from '../../../../../Utils';
import { RestRequestConfig } from '../../../../../Rest';
import {
  CreateSMSMessage,
  GetSMSMessageInfoResponse,
} from '../../../../../definitions';
import Parent from '..';
import { RingCentral } from '../../../../..';

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
   * Creates and sends a new text message. You can send SMS messages simultaneously to different recipients up to 40 requests per minute; this limitation is relevant for all client applications. Sending and receiving SMS is available for Toll-Free Numbers within the USA. You can send up to 10 attachments in one MMS message; the size of all attachments linked is limited to 1500000 bytes.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/sms
   * Rate Limit Group: Medium
   * App Permission: SMS
   * User Permission: OutboundSMS
   */
  async post(
    CreateSMSMessage: CreateSMSMessage,
    restRequestConfig?: RestRequestConfig,
  ): Promise<GetSMSMessageInfoResponse> {
    const formData = Utils.getFormData(CreateSMSMessage);
    const r = await this.rc.post<GetSMSMessageInfoResponse>(
      this.path(),
      formData,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
