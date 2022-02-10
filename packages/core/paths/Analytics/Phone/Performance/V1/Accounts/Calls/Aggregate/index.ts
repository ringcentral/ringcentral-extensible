import {RestRequestConfig} from '../../../../../../../../Rest';
import {
  PerformanceCallsAggregatesRequest,
  AggregatePerformanceReportCallsParameters,
  PerformanceCallsAggregatesResponse,
} from '../../../../../../../../definitions';
import Parent from '..';
import {RingCentral} from '../../../../../../../..';

class Index {
  rc: RingCentral;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }
  path(): string {
    return `${this.parent.path()}/aggregate`;
  }
  /**
   * Returns call performance data aggregated as per the specified parameters.
   * HTTP Method: post
   * Endpoint: /analytics/phone/performance/v1/accounts/{accountId}/calls/aggregate
   * Rate Limit Group: Light
   */
  async post(
    performanceCallsAggregatesRequest: PerformanceCallsAggregatesRequest,
    queryParams?: AggregatePerformanceReportCallsParameters,
    restRequestConfig?: RestRequestConfig
  ): Promise<PerformanceCallsAggregatesResponse> {
    const r = await this.rc.post<PerformanceCallsAggregatesResponse>(
      this.path(),
      performanceCallsAggregatesRequest,
      queryParams,
      restRequestConfig
    );
    return r.data;
  }
}
export default Index;
