import WeeklyScheduleInfo from "./WeeklyScheduleInfo.js";
import RangesInfo from "./RangesInfo.js";

/**
 * Schedule when an answering rule should be applied
 */
interface ScheduleInfo {
  /** */
  weeklyRanges?: WeeklyScheduleInfo;

  /**
   * Specific data ranges
   */
  ranges?: RangesInfo[];

  /**
   * The user's schedule specified for business hours or after hours; it can also be set/retrieved calling the corresponding method
   */
  ref?: "BusinessHours" | "AfterHours";
}

export default ScheduleInfo;
