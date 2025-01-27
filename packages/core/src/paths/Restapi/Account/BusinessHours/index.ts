import CompanyBusinessHoursUpdateRequest from "../../../../definitions/CompanyBusinessHoursUpdateRequest.js";
import CompanyBusinessHours from "../../../../definitions/CompanyBusinessHours.js";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/business-hours`;
  }
  /**
   * Returns the company business hours schedule. Business hours (and After hours - all the remaining time) schedules are commonly used for setting call handling rules - `business-hours-rule` and `after-hours-rule` correspondingly.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/business-hours
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: ReadCompanyAnsweringRules
   */
  public async get(
    restRequestConfig?: RestRequestConfig,
  ): Promise<CompanyBusinessHours> {
    const r = await this.rc.get<CompanyBusinessHours>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Updates the company business hours schedule.
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/business-hours
   * Rate Limit Group: Medium
   * App Permission: EditExtensions
   * User Permission: EditUserAnsweringRules
   */
  public async put(
    companyBusinessHoursUpdateRequest: CompanyBusinessHoursUpdateRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<CompanyBusinessHours> {
    const r = await this.rc.put<CompanyBusinessHours>(
      this.path(),
      companyBusinessHoursUpdateRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
