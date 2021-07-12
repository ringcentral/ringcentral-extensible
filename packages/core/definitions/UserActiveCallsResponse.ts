import {
  UserCallLogRecord,
  CallLogNavigationInfo,
  CallLogPagingInfo,
} from './index';

class UserActiveCallsResponse {
  /**
   * Link to the list of user active call records
   */
  uri?: string;

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
export default UserActiveCallsResponse;
