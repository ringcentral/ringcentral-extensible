import AnalyticsLegacyPerformanceCallsGrouping from './AnalyticsLegacyPerformanceCallsGrouping';
import AnalyticsLegacyPerformanceCallsTimeSettings from './AnalyticsLegacyPerformanceCallsTimeSettings';
import AnalyticsLegacyPerformanceCallsFilters from './AnalyticsLegacyPerformanceCallsFilters';
import AnalyticsLegacyTimelineResponseDataOptions from './AnalyticsLegacyTimelineResponseDataOptions';

interface AnalyticsLegacyPerformanceCallsTimelineRequest {
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
  responseOptions?: AnalyticsLegacyTimelineResponseDataOptions;
}

export default AnalyticsLegacyPerformanceCallsTimelineRequest;
