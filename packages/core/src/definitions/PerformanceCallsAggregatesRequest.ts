import {
  PerformanceCallsGrouping, PerformanceCallsTimeSettings, PerformanceCallsFilters, PerformanceCallsResponseDataOptions,
} from './index';

class PerformanceCallsAggregatesRequest {
  /**
   */
  grouping?: PerformanceCallsGrouping;

  /**
   * Required
   */
  timeSettings?: PerformanceCallsTimeSettings;

  /**
   */
  additionalFilters?: PerformanceCallsFilters;

  /**
   * Required
   */
  responseOptions?: PerformanceCallsResponseDataOptions;
}
export default PerformanceCallsAggregatesRequest;
