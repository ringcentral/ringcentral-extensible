import Utils from '../../../../../Utils';
import GetSMSMessageInfoResponse from '../../../../../definitions/GetSMSMessageInfoResponse';
import CreateMMSMessage from '../../../../../definitions/CreateMMSMessage';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/mms`;
  }

  /**
   * Creates and sends media messages. Sending MMS messages simultaneously to different recipients is limited up to 50 requests per minute; relevant for all client applications.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/mms
   * Rate Limit Group: Medium
   * App Permission: SMS
   * User Permission: OutboundSMS
   */
  async post(CreateMMSMessage: CreateMMSMessage, restRequestConfig?: RestRequestConfig): Promise<GetSMSMessageInfoResponse> {
    const formData = Utils.getFormData(CreateMMSMessage);
    const r = await this.rc.post<GetSMSMessageInfoResponse>(this.path(), formData, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
