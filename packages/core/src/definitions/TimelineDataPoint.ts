import PerformanceCallsTimers from './PerformanceCallsTimers';
import PerformanceCallsCounters from './PerformanceCallsCounters';

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
