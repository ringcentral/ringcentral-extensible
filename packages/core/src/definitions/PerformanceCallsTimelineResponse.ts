import { TimelineData } from './index';

class PerformanceCallsTimelineResponse {
  /**
   * A list of time-value points of call aggregations as per the grouping and filtering options specified in the request
   */
  data?: TimelineData[];
}
export default PerformanceCallsTimelineResponse;
