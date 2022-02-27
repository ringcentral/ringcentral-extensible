import {
  PerformanceCallsCountersResponseOptions,
  PerformanceCallsTimersResponseOptions,
} from './index';

/**
 * Provides mapping of possible breakdown options for call aggregation time intervals
 */
class PerformanceCallsResponseDataOptions {
  /**
   */
  counters?: PerformanceCallsCountersResponseOptions;

  /**
   */
  timers?: PerformanceCallsTimersResponseOptions;
}
export default PerformanceCallsResponseDataOptions;
