import AnalyticsLegacyResponsePaging from './AnalyticsLegacyResponsePaging';
import AnalyticsLegacyPerformanceCallsData from './AnalyticsLegacyPerformanceCallsData';

interface AnalyticsLegacyPerformanceCallsAggregatesResponse {
  /**
   * Required
   */
  paging?: AnalyticsLegacyResponsePaging;

  /**
   * A list of call aggregations as per the grouping and filtering options specified in the request
   */
  data?: AnalyticsLegacyPerformanceCallsData[];
}

export default AnalyticsLegacyPerformanceCallsAggregatesResponse;
