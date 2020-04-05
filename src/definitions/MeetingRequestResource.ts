import MeetingScheduleResource from './MeetingScheduleResource'
import HostInfoRequest from './HostInfoRequest'

class MeetingRequestResource
{
  /**
   */
  topic?: string

  /**
   * Enum: Scheduled, Instant, Recurring
   */
  meetingType?: string

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
