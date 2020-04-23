import { MeetingRecordings, MeetingRecordingsPagingInfo, MeetingRecordingsNavigationInfo } from '.'

class ListMeetingRecordingsResponse {
  /**
   */
  records?: MeetingRecordings[]

  /**
   */
  paging?: MeetingRecordingsPagingInfo

  /**
   */
  navigation?: MeetingRecordingsNavigationInfo
}

export default ListMeetingRecordingsResponse
