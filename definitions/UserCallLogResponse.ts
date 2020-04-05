import UserCallLogRecord from './UserCallLogRecord'
import CallLogNavigationInfo from './CallLogNavigationInfo'
import CallLogPagingInfo from './CallLogPagingInfo'

class UserCallLogResponse
{
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

export default UserCallLogResponse