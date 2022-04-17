import {
  UserCallLogRecord,
  CallLogNavigationInfo,
  CallLogPagingInfo,
} from './index';

class UserCallLogResponse {
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
