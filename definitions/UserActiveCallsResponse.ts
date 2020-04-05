import UserCallLogRecord from './UserCallLogRecord'
import CallLogNavigationInfo from './CallLogNavigationInfo'
import CallLogPagingInfo from './CallLogPagingInfo'

class UserActiveCallsResponse
{
    /// <summary>
    /// Link to the list of user active call records
    /// </summary>
    uri: string

    /// <summary>
    /// List of call log records
    /// Required
    /// </summary>
    records: UserCallLogRecord[]

    /// <summary>
    /// Information on navigation
    /// Required
    /// </summary>
    navigation: CallLogNavigationInfo

    /// <summary>
    /// Information on paging
    /// Required
    /// </summary>
    paging: CallLogPagingInfo
}

export default UserActiveCallsResponse