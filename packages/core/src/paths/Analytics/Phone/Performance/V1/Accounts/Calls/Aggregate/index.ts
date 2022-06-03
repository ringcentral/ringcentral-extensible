import PerformanceCallsAggregatesResponse from '../../../../../../../../definitions/PerformanceCallsAggregatesResponse';
import AggregatePerformanceReportCallsParameters from '../../../../../../../../definitions/AggregatePerformanceReportCallsParameters';
import PerformanceCallsAggregatesRequest from '../../../../../../../../definitions/PerformanceCallsAggregatesRequest';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/aggregate`;
  }

  /**
   * Returns call performance aggregations filtered by parameters specified
   * HTTP Method: post
   * Endpoint: /analytics/phone/performance/v1/accounts/{accountId}/calls/aggregate
   * Rate Limit Group: Light
   * App Permission: Analytics
   */
  async post(performanceCallsAggregatesRequest: PerformanceCallsAggregatesRequest, queryParams?: AggregatePerformanceReportCallsParameters, restRequestConfig?: RestRequestConfig): Promise<PerformanceCallsAggregatesResponse> {
    const r = await this.rc.post<PerformanceCallsAggregatesResponse>(this.path(), performanceCallsAggregatesRequest, queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;
