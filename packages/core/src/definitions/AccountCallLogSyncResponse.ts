import CompanyCallLogRecord from './CompanyCallLogRecord';
import CallLogSyncInfo from './CallLogSyncInfo';

interface AccountCallLogSyncResponse {
  /**
   * Link to account call log sync resource
   * Format: uri
   */
  uri?: string;

  /**
   * List of call log records with synchronization information. For 'ISync' the total number of returned records is limited to 250; this includes both new records and the old ones, specified by the recordCount parameter
   */
  records?: CompanyCallLogRecord[];

  /**
   */
  syncInfo?: CallLogSyncInfo;
}

export default AccountCallLogSyncResponse;
