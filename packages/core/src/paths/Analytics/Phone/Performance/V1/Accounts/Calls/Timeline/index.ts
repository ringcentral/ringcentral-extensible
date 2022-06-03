import PerformanceCallsTimelineResponse from '../../../../../../../../definitions/PerformanceCallsTimelineResponse';
import PerformanceReportCallsTimelineParameters from '../../../../../../../../definitions/PerformanceReportCallsTimelineParameters';
import PerformanceCallsTimelineRequest from '../../../../../../../../definitions/PerformanceCallsTimelineRequest';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/timeline`;
  }

  /**
   * Returns time-value data aggregations filtered by parameters specified
   * HTTP Method: post
   * Endpoint: /analytics/phone/performance/v1/accounts/{accountId}/calls/timeline
   * Rate Limit Group: Light
   * App Permission: Analytics
   */
  async post(performanceCallsTimelineRequest: PerformanceCallsTimelineRequest, queryParams?: PerformanceReportCallsTimelineParameters, restRequestConfig?: RestRequestConfig): Promise<PerformanceCallsTimelineResponse> {
    const r = await this.rc.post<PerformanceCallsTimelineResponse>(this.path(), performanceCallsTimelineRequest, queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;
