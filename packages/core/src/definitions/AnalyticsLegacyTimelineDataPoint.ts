import AnalyticsLegacyPerformanceCallsTimers from './AnalyticsLegacyPerformanceCallsTimers';
import AnalyticsLegacyPerformanceCallsCounters from './AnalyticsLegacyPerformanceCallsCounters';

interface AnalyticsLegacyTimelineDataPoint {
  /**
   * Required
   * Format: date-time
   */
  time?: string;

  /**
   */
  timers?: AnalyticsLegacyPerformanceCallsTimers;

  /**
   */
  counters?: AnalyticsLegacyPerformanceCallsCounters;
}

export default AnalyticsLegacyTimelineDataPoint;
