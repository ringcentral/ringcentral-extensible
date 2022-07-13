import PerformanceCallsGrouping from './PerformanceCallsGrouping';
import PerformanceCallsTimeSettings from './PerformanceCallsTimeSettings';
import PerformanceCallsFilters from './PerformanceCallsFilters';
import PerformanceCallsResponseDataOptions from './PerformanceCallsResponseDataOptions';

interface PerformanceCallsAggregatesRequest {
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
