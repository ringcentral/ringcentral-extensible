import AnalyticsLegacyKeyInfo from './AnalyticsLegacyKeyInfo';
import AnalyticsLegacyPerformanceCallsTimers from './AnalyticsLegacyPerformanceCallsTimers';
import AnalyticsLegacyPerformanceCallsCounters from './AnalyticsLegacyPerformanceCallsCounters';

interface AnalyticsLegacyPerformanceCallsData {
  /**
   * Grouping key
   * Required
   */
  key?: string;

  /**
   */
  keyInfo?: AnalyticsLegacyKeyInfo;

  /**
   */
  timers?: AnalyticsLegacyPerformanceCallsTimers;

  /**
   */
  counters?: AnalyticsLegacyPerformanceCallsCounters;
}

export default AnalyticsLegacyPerformanceCallsData;
