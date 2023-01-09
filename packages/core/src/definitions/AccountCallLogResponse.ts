import CompanyCallLogRecord from './CompanyCallLogRecord';
import CallLogNavigationInfo from './CallLogNavigationInfo';
import CallLogPagingInfo from './CallLogPagingInfo';

interface AccountCallLogResponse {
  /**
   * Link to the list of company call log records
   * Format: uri
   */
  uri?: string;

  /**
   * List of call log records
   * Required
   */
  records?: CompanyCallLogRecord[];

  /**
   * Required
   */
  navigation?: CallLogNavigationInfo;

  /**
   * Required
   */
  paging?: CallLogPagingInfo;
}

export default AccountCallLogResponse;
