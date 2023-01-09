import AnalyticsLegacyPerformanceCallsTimeInterval from './AnalyticsLegacyPerformanceCallsTimeInterval';

/**
 * Allows more granular control over time included in the report
*/
interface AnalyticsLegacyPerformanceCallsAdvancedTimeSettings {
  /**
   * Name of the timezone that will be used for `includeDays` and `includeHours` filters. For example 'America/Los_Angeles', 'Europe/Moscow'. See also *[Time Zones](https://www.iana.org/time-zones)*
   * Required
   */
  timeZone?: string;

  /**
   * Days of the week for which the report is calculated
   */
  includeDays?: ('Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday')[];

  /**
   * Hours of the day for which the report is calculated
   */
  includeHours?: AnalyticsLegacyPerformanceCallsTimeInterval[];
}

export default AnalyticsLegacyPerformanceCallsAdvancedTimeSettings;
