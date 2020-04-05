import MeetingRecordings from './MeetingRecordings'
import MeetingRecordingsPagingInfo from './MeetingRecordingsPagingInfo'
import MeetingRecordingsNavigationInfo from './MeetingRecordingsNavigationInfo'

class ListMeetingRecordingsResponse
{
    /**
     */
    records: MeetingRecordings[]

    /**
     */
    paging: MeetingRecordingsPagingInfo

    /**
     */
    navigation: MeetingRecordingsNavigationInfo
}

export default ListMeetingRecordingsResponse