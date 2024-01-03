import Utils from '../../../../../Utils';
import type GetSMSMessageInfoResponse from '../../../../../definitions/GetSMSMessageInfoResponse';
import type CreateMMSMessage from '../../../../../definitions/CreateMMSMessage';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/mms`;
  }
  /**
   * Creates and sends a new media message or multiple messages. Sending MMS
   * messages simultaneously to different recipients is limited up to 50
   * requests per minute; relevant for all client applications.
   *
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/mms
   * Rate Limit Group: Medium
   * App Permission: SMS
   * User Permission: OutboundSMS
   */
  public async post(
    createMMSMessage: CreateMMSMessage,
    restRequestConfig?: RestRequestConfig,
  ): Promise<GetSMSMessageInfoResponse> {
    const formData = await Utils.getFormData(createMMSMessage);
    const r = await this.rc.post<GetSMSMessageInfoResponse>(this.path(), formData, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
