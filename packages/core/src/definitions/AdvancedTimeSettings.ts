import HoursInterval from "./HoursInterval.js";

/**
 * Allows more granular control over time included in the report
 */
interface AdvancedTimeSettings {
  /**
   * Days of the week for which the report is calculated
   */
  includeDays?: (
    | "Sunday"
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
  )[];

  /**
   * Hours of the day for which the report is calculated
   */
  includeHours?: HoursInterval[];
}

export default AdvancedTimeSettings;
