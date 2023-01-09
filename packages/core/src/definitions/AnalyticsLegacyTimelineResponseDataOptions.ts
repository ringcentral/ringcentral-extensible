import AnalyticsLegacyTimelineCountersResponseOptions from './AnalyticsLegacyTimelineCountersResponseOptions';
import AnalyticsLegacyTimelineTimersResponseOptions from './AnalyticsLegacyTimelineTimersResponseOptions';

/**
 * This field provides mapping of possible breakdown options that will be used for aggregation within every time interval
*/
interface AnalyticsLegacyTimelineResponseDataOptions {
  /**
   */
  counters?: AnalyticsLegacyTimelineCountersResponseOptions;

  /**
   */
  timers?: AnalyticsLegacyTimelineTimersResponseOptions;
}

export default AnalyticsLegacyTimelineResponseDataOptions;
