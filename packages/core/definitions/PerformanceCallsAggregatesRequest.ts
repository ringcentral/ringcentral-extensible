import {
  PerformanceCallsGrouping,
  PerformanceCallsTimeSettings,
  PerformanceCallsAdditionalFilters,
  PerformanceCallsResponseDataOptions,
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
  additionalFilters?: PerformanceCallsAdditionalFilters;

  /**
   * Required
   */
  responseOptions?: PerformanceCallsResponseDataOptions;
}
export default PerformanceCallsAggregatesRequest;
