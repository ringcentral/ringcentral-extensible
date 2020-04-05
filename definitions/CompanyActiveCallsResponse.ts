import CompanyCallLogRecord from './CompanyCallLogRecord'
import CallLogNavigationInfo from './CallLogNavigationInfo'
import CallLogPagingInfo from './CallLogPagingInfo'

class CompanyActiveCallsResponse
{
    /**
     * Link to the list of company active call records
     */
    uri: string

    /**
     * List of call log records
     * Required
     */
    records: CompanyCallLogRecord[]

    /**
     * Information on navigation
     * Required
     */
    navigation: CallLogNavigationInfo

    /**
     * Information on paging
     * Required
     */
    paging: CallLogPagingInfo
}

export default CompanyActiveCallsResponse