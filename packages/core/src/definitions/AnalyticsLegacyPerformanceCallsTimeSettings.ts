import AnalyticsLegacyPerformanceCallsTimeRange from './AnalyticsLegacyPerformanceCallsTimeRange';
import AnalyticsLegacyPerformanceCallsAdvancedTimeSettings from './AnalyticsLegacyPerformanceCallsAdvancedTimeSettings';

/**
 * Date-time range for which the calls are aggregated. The call is considered to be within time range if it started within time range. Both borders are inclusive
*/
interface AnalyticsLegacyPerformanceCallsTimeSettings {
  /**
   * Required
   */
  timeRange?: AnalyticsLegacyPerformanceCallsTimeRange;

  /**
   */
  advancedTimeSettings?: AnalyticsLegacyPerformanceCallsAdvancedTimeSettings;
}

export default AnalyticsLegacyPerformanceCallsTimeSettings;
