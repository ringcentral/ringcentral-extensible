import { UserCallLogRecord, CallLogNavigationInfo, CallLogPagingInfo } from '.'

class UserActiveCallsResponse {
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
