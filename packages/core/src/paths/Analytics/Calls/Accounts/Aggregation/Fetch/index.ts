import AggregationResponse from '../../../../../../definitions/AggregationResponse';
import AnalyticsCallsAggregationFetchParameters from '../../../../../../definitions/AnalyticsCallsAggregationFetchParameters';
import AggregationRequest from '../../../../../../definitions/AggregationRequest';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../../types';

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
   * Returns call aggregations filtered by parameters specified
   * HTTP Method: post
   * Endpoint: /analytics/calls/{version}/accounts/{accountId}/aggregation/fetch
   * Rate Limit Group: Light
   * App Permission: Analytics
   */
  async post(aggregationRequest: AggregationRequest, queryParams?: AnalyticsCallsAggregationFetchParameters, restRequestConfig?: RestRequestConfig): Promise<AggregationResponse> {
    const r = await this.rc.post<AggregationResponse>(this.path(), aggregationRequest, queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;
