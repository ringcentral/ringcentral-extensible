import type MeetingsTimezoneResource from "./MeetingsTimezoneResource";

/**
 * Timing of a meeting
 */
interface MeetingScheduleResource {
  /**
   * Format: date-time
   */
  startTime?: string;

  /**
   * Format: int32
   */
  durationInMinutes?: number;

  /** */
  timeZone?: MeetingsTimezoneResource;
}

export default MeetingScheduleResource;
