import WeeklyScheduleInfo from "./WeeklyScheduleInfo.js";

/**
 * Schedule when an answering rule is applied
 */
interface CompanyBusinessHoursScheduleInfo {
  /** */
  weeklyRanges?: WeeklyScheduleInfo;
}

export default CompanyBusinessHoursScheduleInfo;
