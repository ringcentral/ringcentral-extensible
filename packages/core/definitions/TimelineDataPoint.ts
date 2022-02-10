import {PerformanceCallsTimers, PerformanceCallsCounters} from './index';

class TimelineDataPoint {
  /**
   * Required
   * Format: date-time
   */
  time?: string;

  /**
   */
  timers?: PerformanceCallsTimers;

  /**
   */
  counters?: PerformanceCallsCounters;
}
export default TimelineDataPoint;
