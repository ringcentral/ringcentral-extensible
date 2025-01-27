import MeetingsTimezoneResource from "./MeetingsTimezoneResource.js";

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
