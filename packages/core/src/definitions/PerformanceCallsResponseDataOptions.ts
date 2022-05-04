import PerformanceCallsCountersResponseOptions from './PerformanceCallsCountersResponseOptions';
import PerformanceCallsTimersResponseOptions from './PerformanceCallsTimersResponseOptions';

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
