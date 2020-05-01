import {MeetingScheduleResource, HostInfoRequest, RecurrenceInfo} from '.';

class MeetingRequestResource {
  /**
   */
  topic?: string;

  /**
   */
  meetingType?: 'Instant' | 'Scheduled' | 'ScheduledRecurring' | 'Recurring';

  /**
   */
  schedule?: MeetingScheduleResource;

  /**
   */
  password?: string;

  /**
   */
  host?: HostInfoRequest;

  /**
   */
  allowJoinBeforeHost?: boolean;

  /**
   */
  startHostVideo?: boolean;

  /**
   */
  startParticipantsVideo?: boolean;

  /**
   */
  usePersonalMeetingId?: boolean;

  /**
   */
  audioOptions?: string[];

  /**
   * Recurrence settings
   */
  recurrence?: RecurrenceInfo;

  /**
   * Automatic record type
   * Default: local
   */
  autoRecordType?: 'local' | 'cloud' | 'none';
}

export default MeetingRequestResource;
