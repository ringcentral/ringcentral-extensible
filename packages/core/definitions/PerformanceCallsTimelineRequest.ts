import {
  PerformanceCallsGrouping,
  PerformanceCallsTimeRange,
  PerformanceCallsAdditionalFilters,
  PerformanceCallsResponseDataOptions,
} from './index';

class PerformanceCallsTimelineRequest {
  /**
   */
  grouping?: PerformanceCallsGrouping;

  /**
   * Required
   */
  timeRange?: PerformanceCallsTimeRange;

  /**
   */
  additionalFilters?: PerformanceCallsAdditionalFilters;

  /**
   * Required
   */
  responseOptions?: PerformanceCallsResponseDataOptions;
}
export default PerformanceCallsTimelineRequest;
