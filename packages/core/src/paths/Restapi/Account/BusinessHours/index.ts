import { RestRequestConfig } from '../../../../Rest';
import { CompanyBusinessHours, CompanyBusinessHoursUpdateRequest } from '../../../../definitions';
import Parent from '..';
import RingCentral from '../../../..';

class Index {
  rc: RingCentral;

  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/business-hours`;
  }

  /**
   * Returns the company business hours schedule. Business hours (and After hours - all the remaining time) schedules are commonly used for setting call handling rules - `business-hours-rule` and `after-hours-rule` correspondingly.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/business-hours
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: ReadUserAnsweringRules
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<CompanyBusinessHours> {
    const r = await this.rc.get<CompanyBusinessHours>(this.path(), undefined, restRequestConfig);
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
  async put(companyBusinessHoursUpdateRequest: CompanyBusinessHoursUpdateRequest, restRequestConfig?: RestRequestConfig): Promise<CompanyBusinessHours> {
    const r = await this.rc.put<CompanyBusinessHours>(this.path(), companyBusinessHoursUpdateRequest, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
