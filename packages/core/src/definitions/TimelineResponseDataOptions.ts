import TimelineCountersResponseOptions from './TimelineCountersResponseOptions';
import TimelineTimersResponseOptions from './TimelineTimersResponseOptions';

/**
 * This field provides mapping of possible breakdown options that will be used for aggregation within every time interval
*/
class TimelineResponseDataOptions {
  /**
   */
  counters?: TimelineCountersResponseOptions;

  /**
   */
  timers?: TimelineTimersResponseOptions;
}

export default TimelineResponseDataOptions;
