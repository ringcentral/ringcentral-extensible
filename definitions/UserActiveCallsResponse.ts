import UserCallLogRecord from './UserCallLogRecord'
import CallLogNavigationInfo from './CallLogNavigationInfo'
import CallLogPagingInfo from './CallLogPagingInfo'

class UserActiveCallsResponse
{
    /**
     * Link to the list of user active call records
     */
    uri?: string

    /**
     * List of call log records
     * Required
     */
    records?: UserCallLogRecord[]

    /**
     * Information on navigation
     * Required
     */
    navigation?: CallLogNavigationInfo

    /**
     * Information on paging
     * Required
     */
    paging?: CallLogPagingInfo
}

export default UserActiveCallsResponse