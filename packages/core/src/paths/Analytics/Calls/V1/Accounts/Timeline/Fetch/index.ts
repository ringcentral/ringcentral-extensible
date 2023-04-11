import TimelineResponse from '../../../../../../../definitions/TimelineResponse';
import AnalyticsCallsTimelineFetchParameters from '../../../../../../../definitions/AnalyticsCallsTimelineFetchParameters';
import TimelineRequest from '../../../../../../../definitions/TimelineRequest';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/fetch`;
  }

  /**
   * Returns time-value data aggregations filtered by parameters specified
   * HTTP Method: post
   * Endpoint: /analytics/calls/v1/accounts/{accountId}/timeline/fetch
   * Rate Limit Group: Light
   * App Permission: Analytics
   */
  async post(timelineRequest: TimelineRequest, queryParams?: AnalyticsCallsTimelineFetchParameters, restRequestConfig?: RestRequestConfig): Promise<TimelineResponse> {
    const r = await this.rc.post<TimelineResponse>(this.path(), timelineRequest, queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;
