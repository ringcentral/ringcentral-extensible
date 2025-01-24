import type TimeRange from "./TimeRange";
import type AdvancedTimeSettings from "./AdvancedTimeSettings";

/**
 * Date-time range for the calls. The call is considered to be within time range if it started within time range. Both borders are inclusive
 */
interface TimeSettings {
  /**
   * Name of the timezone that will be used for `includeDays` and `includeHours` filters and aggregation intervals. For example 'America/Los_Angeles', 'Europe/Zurich'. See also *[Time Zones](https://www.iana.org/time-zones)*. Value in this field doesn't affect interpretation of time in `timeRange`, as it already includes offset from UTC
   * Required
   */
  timeZone?: string;

  /**
   * Required
   */
  timeRange?: TimeRange;

  /** */
  advancedTimeSettings?: AdvancedTimeSettings;
}

export default TimeSettings;
