import {
  PerformanceCallsKeyInfo,
  PerformanceCallsTimers,
  PerformanceCallsCounters,
} from './index';

/**
 * A list of call aggregations as per the grouping and filtering options specified in the request.
 */
class PerformanceCallsData {
  /**
   * Grouping key
   * Required
   */
  key?: string;

  /**
   */
  keyInfo?: PerformanceCallsKeyInfo;

  /**
   */
  timers?: PerformanceCallsTimers;

  /**
   */
  counters?: PerformanceCallsCounters;
}
export default PerformanceCallsData;
