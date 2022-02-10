import {
  PerformanceCallsTimeRange,
  PerformanceCallsAdvancedTimeSettings,
} from './index';

/**
 * Date-time range for which the calls are aggregated. The call is considered to be within time range if it started within time range. Both borders are inclusive.
 */
class PerformanceCallsTimeSettings {
  /**
   * Required
   */
  timeRange?: PerformanceCallsTimeRange;

  /**
   */
  advancedTimeSettings?: PerformanceCallsAdvancedTimeSettings;
}
export default PerformanceCallsTimeSettings;
