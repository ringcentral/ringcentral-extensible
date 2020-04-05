import CompanyCallLogRecord from './CompanyCallLogRecord'
import CallLogNavigationInfo from './CallLogNavigationInfo'
import CallLogPagingInfo from './CallLogPagingInfo'

class CompanyActiveCallsResponse
{
    /// <summary>
    /// Link to the list of company active call records
    /// </summary>
    uri: string

    /// <summary>
    /// List of call log records
    /// Required
    /// </summary>
    records: CompanyCallLogRecord[]

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

export default CompanyActiveCallsResponse