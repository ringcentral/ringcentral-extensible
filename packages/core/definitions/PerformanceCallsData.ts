import {
  KeyInfo,
  PerformanceCallsTimers,
  PerformanceCallsCounters,
} from './index';

class PerformanceCallsData {
  /**
   * Grouping key.
   * Required
   */
  key?: string;

  /**
   */
  keyInfo?: KeyInfo;

  /**
   */
  timers?: PerformanceCallsTimers;

  /**
   */
  counters?: PerformanceCallsCounters;
}
export default PerformanceCallsData;
