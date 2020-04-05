import MeetingRecordings from './MeetingRecordings'
import MeetingRecordingsPagingInfo from './MeetingRecordingsPagingInfo'
import MeetingRecordingsNavigationInfo from './MeetingRecordingsNavigationInfo'

class ListMeetingRecordingsResponse
{
    /// <summary>
    /// </summary>
    records: MeetingRecordings[]

    /// <summary>
    /// </summary>
    paging: MeetingRecordingsPagingInfo

    /// <summary>
    /// </summary>
    navigation: MeetingRecordingsNavigationInfo
}

export default ListMeetingRecordingsResponse