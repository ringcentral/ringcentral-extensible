import {RestRequestConfig} from '../../../../Rest';
import {
  CompanyBusinessHours,
  CompanyBusinessHoursUpdateRequest,
} from '../../../../definitions';
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
   * Operation: Get Company Business Hours
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/business-hours
   */
  async get(config?: RestRequestConfig): Promise<CompanyBusinessHours> {
    const r = await this.rc.get<CompanyBusinessHours>(
      this.path(),
      undefined,
      config
    );
    return r.data;
  }

  /**
   * Operation: Update Company Business Hours
   * Rate Limit Group: Medium
   * Http put /restapi/v1.0/account/{accountId}/business-hours
   */
  async put(
    companyBusinessHoursUpdateRequest: CompanyBusinessHoursUpdateRequest,
    config?: RestRequestConfig
  ): Promise<CompanyBusinessHours> {
    const r = await this.rc.put<CompanyBusinessHours>(
      this.path(),
      companyBusinessHoursUpdateRequest,
      undefined,
      config
    );
    return r.data;
  }
}

export default Index;
