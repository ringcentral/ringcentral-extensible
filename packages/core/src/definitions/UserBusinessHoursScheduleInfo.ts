import WeeklyScheduleInfo from "./WeeklyScheduleInfo.js";

/**
 * Schedule when an answering rule is applied
 */
interface UserBusinessHoursScheduleInfo {
  /** */
  weeklyRanges?: WeeklyScheduleInfo;
}

export default UserBusinessHoursScheduleInfo;
