import MeetingsTimezoneResource from './MeetingsTimezoneResource';

/**
 * Timing of a meeting
*/
class MeetingScheduleResource {
  /**
   */
  startTime?: string;

  /**
   * Format: int32
   */
  durationInMinutes?: number;

  /**
   */
  timeZone?: MeetingsTimezoneResource;
}

export default MeetingScheduleResource;
