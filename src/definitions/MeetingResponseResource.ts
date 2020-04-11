import MeetingLinks from './MeetingLinks'
import MeetingScheduleResource from './MeetingScheduleResource'
import HostInfoRequest from './HostInfoRequest'

class MeetingResponseResource
{
  /**
   */
  uri?: string

  /**
   */
  uuid?: string

  /**
   */
  id?: string

  /**
   */
  topic?: string

  /**
   */
  meetingType?: ('Scheduled' | 'Instant' | 'Recurring')

  /**
   */
  password?: string

  /**
   */
  h323Password?: string

  /**
   */
  status?: string

  /**
   */
  links?: MeetingLinks

  /**
   */
  schedule?: MeetingScheduleResource

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
  audioOptions?: string[]
}

export default MeetingResponseResource
