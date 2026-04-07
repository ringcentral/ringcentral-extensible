import AssignNumbersRequest from "../../../../../../definitions/AssignNumbersRequest.js";
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../../types.js';

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  
  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/submit-phone-numbers`;
  }
  /**
   * Links phone number(s) to a TCR campaign.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/sms-registration-brands/{tcrBrandId}/campaigns/{tcrCampaignId}/submit-phone-numbers
   * Rate Limit Group: Light
   * App Permission: EditAccounts
   * User Permission: EditCompanyPhoneNumbers
   */
  public async post(assignNumbersRequest: AssignNumbersRequest, restRequestConfig?: RestRequestConfig): Promise<string> {
    const r = await this.rc.post<string>(this.path(), assignNumbersRequest, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;