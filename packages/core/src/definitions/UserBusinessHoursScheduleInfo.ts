import type WeeklyScheduleInfo from './WeeklyScheduleInfo';

/**
 * Schedule when an answering rule is applied
 */
interface UserBusinessHoursScheduleInfo {
  /**
   */
  weeklyRanges?: WeeklyScheduleInfo;
}

export default UserBusinessHoursScheduleInfo;
