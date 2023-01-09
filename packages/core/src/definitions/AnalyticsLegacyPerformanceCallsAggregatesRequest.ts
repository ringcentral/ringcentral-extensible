import AnalyticsLegacyPerformanceCallsGrouping from './AnalyticsLegacyPerformanceCallsGrouping';
import AnalyticsLegacyPerformanceCallsTimeSettings from './AnalyticsLegacyPerformanceCallsTimeSettings';
import AnalyticsLegacyPerformanceCallsFilters from './AnalyticsLegacyPerformanceCallsFilters';
import AnalyticsLegacyPerformanceCallsResponseDataOptions from './AnalyticsLegacyPerformanceCallsResponseDataOptions';

interface AnalyticsLegacyPerformanceCallsAggregatesRequest {
  /**
   */
  grouping?: AnalyticsLegacyPerformanceCallsGrouping;

  /**
   * Required
   */
  timeSettings?: AnalyticsLegacyPerformanceCallsTimeSettings;

  /**
   */
  additionalFilters?: AnalyticsLegacyPerformanceCallsFilters;

  /**
   * Required
   */
  responseOptions?: AnalyticsLegacyPerformanceCallsResponseDataOptions;
}

export default AnalyticsLegacyPerformanceCallsAggregatesRequest;
