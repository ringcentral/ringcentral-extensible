import CompanyCallLogRecord from './CompanyCallLogRecord';
import CallLogNavigationInfo from './CallLogNavigationInfo';
import CallLogPagingInfo from './CallLogPagingInfo';

interface AccountCallLogResponse {
  /**
   * Link to the list of company call log records
   */
  uri?: string;

  /**
   * List of call log records
   */
  records?: CompanyCallLogRecord[];

  /**
   */
  navigation?: CallLogNavigationInfo;

  /**
   */
  paging?: CallLogPagingInfo;
}

export default AccountCallLogResponse;
