import Utils from '../../../../../Utils';
import { RestRequestConfig } from '../../../../../Rest';
import { CreateFaxMessageRequest, FaxResponse } from '../../../../../definitions';
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
    const formData = Utils.getFormData(createFaxMessageRequest);
    const r = await this.rc.post<FaxResponse>(this.path(), formData, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
