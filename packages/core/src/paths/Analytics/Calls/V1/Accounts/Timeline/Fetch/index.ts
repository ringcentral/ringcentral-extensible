import type TimelineResponse from '../../../../../../../definitions/TimelineResponse';
import type AnalyticsCallsTimelineFetchParameters from '../../../../../../../definitions/AnalyticsCallsTimelineFetchParameters';
import type TimelineRequest from '../../../../../../../definitions/TimelineRequest';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }

  public path(): string {
    return `${this._parent.path()}/fetch`;
  }

  /**
   * Returns time-value data aggregations filtered by parameters specified
   * HTTP Method: post
   * Endpoint: /analytics/calls/v1/accounts/{accountId}/timeline/fetch
   * Rate Limit Group: Light
   * App Permission: Analytics
   */
  public async post(
    timelineRequest: TimelineRequest,
    queryParams?: AnalyticsCallsTimelineFetchParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<TimelineResponse> {
    const r = await this.rc.post<TimelineResponse>(this.path(), timelineRequest, queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;
