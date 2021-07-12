import {RestRequestConfig} from '../../../../Rest';
import {
  ListCompanyActiveCallsParameters,
  CompanyActiveCallsResponse,
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
   * Returns records of all calls that are in progress, ordered by start time in descending order.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/active-calls
   * Rate Limit Group: Heavy
   * App Permission: ReadCallLog
   * User Permission: ReadCallLog
   */
  async get(
    queryParams?: ListCompanyActiveCallsParameters,
    restRequestConfig?: RestRequestConfig
  ): Promise<CompanyActiveCallsResponse> {
    const r = await this.rc.get<CompanyActiveCallsResponse>(
      this.path(),
      queryParams,
      restRequestConfig
    );
    return r.data;
  }
}
export default Index;
