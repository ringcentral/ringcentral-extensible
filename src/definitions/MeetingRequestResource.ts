import MeetingScheduleResource from './MeetingScheduleResource'
import HostInfoRequest from './HostInfoRequest'

class MeetingRequestResource
{
  /**
   */
  topic?: string

  /**
   */
  meetingType?: ('Scheduled' | 'Instant' | 'Recurring')

  /**
   */
  schedule?: MeetingScheduleResource

  /**
   */
  password?: string

  /**
   */
  host?: HostInfoRequest

  /**
   */
  allowJoinBeforeHost?: boolean

  /**
   */
  startHostVideo?: boolean

  /**
   */
  startParticipantsVideo?: boolean

  /**
   */
  usePersonalMeetingId?: boolean

  /**
   */
  audioOptions?: string[]
}

export default MeetingRequestResource
