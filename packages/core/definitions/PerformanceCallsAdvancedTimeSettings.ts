import {PerformanceCallsTimeInterval} from './index';

/**
 * Allows more granular control over time included in the report
 */
class PerformanceCallsAdvancedTimeSettings {
  /**
   * IANA-compatible time zone name, see [Time Zones](https://www.iana.org/time-zones)
   * Required
   */
  timeZone?: string;

  /**
   * Days of the week for which the report is calculated
   */
  includeDays?: (
    | 'Sunday'
    | 'Monday'
    | 'Tuesday'
    | 'Wednesday'
    | 'Thursday'
    | 'Friday'
    | 'Saturday'
  )[];

  /**
   * Hours of the day for which the report is calculated
   */
  includeHours?: PerformanceCallsTimeInterval[];
}
export default PerformanceCallsAdvancedTimeSettings;
