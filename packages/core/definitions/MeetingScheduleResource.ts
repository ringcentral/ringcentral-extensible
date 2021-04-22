import {MeetingsTimezoneResource} from './index';

// Timing of a meeting
class MeetingScheduleResource {
  /**
   */
  startTime?: string;

  /**
   */
  durationInMinutes?: number;

  /**
   */
  timeZone?: MeetingsTimezoneResource;
}

export default MeetingScheduleResource;
