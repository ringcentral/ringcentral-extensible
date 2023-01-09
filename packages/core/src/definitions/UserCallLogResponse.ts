import CallLogRecord from './CallLogRecord';
import CallLogNavigationInfo from './CallLogNavigationInfo';
import CallLogPagingInfo from './CallLogPagingInfo';

interface UserCallLogResponse {
  /**
   * List of call log records
   * Required
   */
  records?: CallLogRecord[];

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
