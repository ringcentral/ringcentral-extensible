import UserCallLogRecord from './UserCallLogRecord';
import CallLogNavigationInfo from './CallLogNavigationInfo';
import CallLogPagingInfo from './CallLogPagingInfo';

interface UserCallLogResponse {
  /**
   * List of call log records
   * Required
   */
  records?: UserCallLogRecord[];

  /**
   * Required
   */
  navigation?: CallLogNavigationInfo;

  /**
   * Required
   */
  paging?: CallLogPagingInfo;
}

export default UserCallLogResponse;
