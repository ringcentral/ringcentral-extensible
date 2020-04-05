import CompanyCallLogRecord from './CompanyCallLogRecord'
import CallLogNavigationInfo from './CallLogNavigationInfo'
import CallLogPagingInfo from './CallLogPagingInfo'

class AccountCallLogResponse
{
    /// <summary>
    /// Link to the list of company call log records
    /// </summary>
    uri: string

    /// <summary>
    /// List of call log records
    /// </summary>
    records: CompanyCallLogRecord[]

    /// <summary>
    /// Information on navigation
    /// </summary>
    navigation: CallLogNavigationInfo

    /// <summary>
    /// Information on paging
    /// </summary>
    paging: CallLogPagingInfo
}

export default AccountCallLogResponse