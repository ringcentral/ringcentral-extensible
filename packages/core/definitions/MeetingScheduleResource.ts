import {TimezoneResource} from './index';

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
  timeZone?: TimezoneResource;
}

export default MeetingScheduleResource;
