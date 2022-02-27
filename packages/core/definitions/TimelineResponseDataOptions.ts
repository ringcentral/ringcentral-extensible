import {
  TimelineCountersResponseOptions,
  TimelineTimersResponseOptions,
} from './index';

/**
 * This field provides mapping of possible breakdown options for call aggregation time intervals
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
