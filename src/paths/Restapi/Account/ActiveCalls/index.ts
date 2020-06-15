import {RestRequestConfig} from '../../../../Rest';
import {
  CompanyActiveCallsResponse,
  ListCompanyActiveCallsParameters,
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
    return `${this.parent.path()}/active-calls`;
  }

  /**
   * Operation: Get Company Active Calls
   * Rate Limit Group: Heavy
   * Http get /restapi/v1.0/account/{accountId}/active-calls
   */
  async get(
    queryParams?: ListCompanyActiveCallsParameters,
    config?: RestRequestConfig
  ): Promise<CompanyActiveCallsResponse> {
    const r = await this.rc.get<CompanyActiveCallsResponse>(
      this.path(),
      queryParams,
      config
    );
    return r.data;
  }
}

export default Index;
