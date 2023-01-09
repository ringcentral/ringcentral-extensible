import AnalyticsLegacyPerformanceCallsCountersResponseOptions from './AnalyticsLegacyPerformanceCallsCountersResponseOptions';
import AnalyticsLegacyPerformanceCallsTimersResponseOptions from './AnalyticsLegacyPerformanceCallsTimersResponseOptions';

/**
 * This field provides mapping of possible breakdown options for call aggregation and aggregation formula
*/
interface AnalyticsLegacyPerformanceCallsResponseDataOptions {
  /**
   */
  counters?: AnalyticsLegacyPerformanceCallsCountersResponseOptions;

  /**
   */
  timers?: AnalyticsLegacyPerformanceCallsTimersResponseOptions;
}

export default AnalyticsLegacyPerformanceCallsResponseDataOptions;
