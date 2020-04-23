import { MeetingResponseResource, MeetingsPagingInfo, MeetingsNavigationInfo } from '.'

class MeetingsResource {
  /**
   */
  uri?: string

  /**
   */
  records?: MeetingResponseResource[]

  /**
   */
  paging?: MeetingsPagingInfo

  /**
   */
  navigation?: MeetingsNavigationInfo
}

export default MeetingsResource
