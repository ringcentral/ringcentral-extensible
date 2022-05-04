import { PerformanceCallsCountersResponseOptions, PerformanceCallsTimersResponseOptions } from './index';

/**
 * This field provides mapping of possible breakdown options for call aggregation and aggregation formula
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
