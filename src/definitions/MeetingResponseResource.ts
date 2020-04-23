import { MeetingLinks, MeetingScheduleResource, HostInfoRequest, MeetingOccurrenceInfo } from '.'

class MeetingResponseResource {
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
  meetingType?: ('Instant' | 'Scheduled' | 'ScheduledRecurring' | 'Recurring')

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

  /**
   * List of meeting occurrences
   */
  occurrences?: MeetingOccurrenceInfo[]
}

export default MeetingResponseResource
