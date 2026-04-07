import CallLogRecord from "./CallLogRecord.js";
import CallLogSyncInfo from "./CallLogSyncInfo.js";

interface CallLogSyncResponse {
  /**
   * Link to the list of call log records with sync information
   * Required
   * Format: uri
   */
  uri?: string;

  /**
   * List of call log records with synchronization information. For `ISync` the total number of returned records is limited to 250;
   *  this includes both new records and the old ones, specified by the recordCount parameter
   * Required
   */
  records?: CallLogRecord[];

  /**
   * Required
   */
  syncInfo?: CallLogSyncInfo;
}

export default CallLogSyncResponse;
