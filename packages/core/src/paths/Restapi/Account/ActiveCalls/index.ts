import CompanyActiveCallsResponse from '../../../../definitions/CompanyActiveCallsResponse';
import ListCompanyActiveCallsParameters from '../../../../definitions/ListCompanyActiveCallsParameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
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
  async get(queryParams?: ListCompanyActiveCallsParameters, restRequestConfig?: RestRequestConfig): Promise<CompanyActiveCallsResponse> {
    const r = await this.rc.get<CompanyActiveCallsResponse>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;
