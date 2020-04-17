import { UserCallLogRecord, CallLogNavigationInfo, CallLogPagingInfo } from '.'

class UserCallLogResponse
{
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

export default UserCallLogResponse
