import AnalyticsLegacyTimelineData from './AnalyticsLegacyTimelineData';

interface AnalyticsLegacyPerformanceCallsTimelineResponse {
  /**
   * A list of time-value points of call aggregations as per the grouping and filtering options specified in the request
   */
  data?: AnalyticsLegacyTimelineData[];
}

export default AnalyticsLegacyPerformanceCallsTimelineResponse;
