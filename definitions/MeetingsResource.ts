import MeetingResponseResource from './MeetingResponseResource'
import MeetingsPagingInfo from './MeetingsPagingInfo'
import MeetingsNavigationInfo from './MeetingsNavigationInfo'

class MeetingsResource
{
    /// <summary>
    /// </summary>
    uri: string

    /// <summary>
    /// </summary>
    records: MeetingResponseResource[]

    /// <summary>
    /// </summary>
    paging: MeetingsPagingInfo

    /// <summary>
    /// </summary>
    navigation: MeetingsNavigationInfo
}

export default MeetingsResource