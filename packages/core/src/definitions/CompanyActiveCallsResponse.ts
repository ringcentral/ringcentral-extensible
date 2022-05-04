import { CompanyCallLogRecord, CallLogNavigationInfo, CallLogPagingInfo } from './index';

class CompanyActiveCallsResponse {
  /**
   * Link to the list of company active call records
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
export default CompanyActiveCallsResponse;
