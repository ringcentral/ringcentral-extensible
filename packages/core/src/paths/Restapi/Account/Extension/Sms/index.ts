import Utils from '../../../../../Utils';
import GetSMSMessageInfoResponse from '../../../../../definitions/GetSMSMessageInfoResponse';
import CreateSMSMessage from '../../../../../definitions/CreateSMSMessage';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }

  public path(withParameter = false): string {
    return `${this._parent.path()}/sms`;
  }

  /**
   * Creates and sends a new text message or multiple messages. You can send SMS
 * messages simultaneously to different recipients up to 40 requests per minute;
 * this limitation is relevant for all client applications. Sending and receiving
 * SMS is available for Toll-Free Numbers within the USA. You can send up to
 * 10 attachments in a single MMS message; the size of all attachments linked
 * is limited up to 1500000 bytes.
 *
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/sms
   * Rate Limit Group: Medium
   * App Permission: SMS
   * User Permission: OutboundSMS
   */
  public async post(createSMSMessage: CreateSMSMessage, restRequestConfig?: RestRequestConfig): Promise<GetSMSMessageInfoResponse> {
    const formData = await Utils.getFormData(createSMSMessage);
    const r = await this.rc.post<GetSMSMessageInfoResponse>(this.path(), formData, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
