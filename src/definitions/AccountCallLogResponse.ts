import CompanyCallLogRecord from './CompanyCallLogRecord'
import CallLogNavigationInfo from './CallLogNavigationInfo'
import CallLogPagingInfo from './CallLogPagingInfo'

class AccountCallLogResponse
{
  /**
   * Link to the list of company call log records
   */
  uri?: string

  /**
   * List of call log records
   */
  records?: CompanyCallLogRecord[]

  /**
   * Information on navigation
   */
  navigation?: CallLogNavigationInfo

  /**
   * Information on paging
   */
  paging?: CallLogPagingInfo
}

export default AccountCallLogResponse
