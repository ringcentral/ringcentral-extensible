import {
  AggregatePerformanceCallsGrouping,
  PerformanceCallsTimeSettings,
  PerformanceCallsFilters,
  PerformanceCallsResponseDataOptions,
} from './index';

class PerformanceCallsAggregatesRequest {
  /**
   * Required
   */
  grouping?: AggregatePerformanceCallsGrouping;

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
