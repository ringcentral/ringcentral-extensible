import Utils from '../../../../../Utils';
import FaxResponse from '../../../../../definitions/FaxResponse';
import CreateFaxMessageRequest from '../../../../../definitions/CreateFaxMessageRequest';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/fax`;
  }

  /**
   * Creates and sends/resends a fax message. Resend can be implemented if sending has failed. Fax attachment size (both single and total) is limited to 50Mb.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/fax
   * Rate Limit Group: Heavy
   * App Permission: Faxes
   * User Permission: OutboundFaxes
   */
  async post(createFaxMessageRequest: CreateFaxMessageRequest, restRequestConfig?: RestRequestConfig): Promise<FaxResponse> {
    const formData = await Utils.getFormData(createFaxMessageRequest);
    const r = await this.rc.post<FaxResponse>(this.path(), formData, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
