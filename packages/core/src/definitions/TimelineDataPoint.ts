import PerformanceCallsTimers from './PerformanceCallsTimers';
import PerformanceCallsCounters from './PerformanceCallsCounters';

interface TimelineDataPoint {
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
