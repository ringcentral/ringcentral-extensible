import CallLogRecord from "./CallLogRecord.js";
import CallLogExtractSyncInfo from "./CallLogExtractSyncInfo.js";

interface CallLogExtractSyncResponse {
  /**
   * Link to the list of call log records with sync information
   * Required
   * Format: uri
   */
  uri?: string;

  /**
   * List of call log records
   * Required
   */
  records?: CallLogRecord[];

  /**
   * Required
   */
  syncInfo?: CallLogExtractSyncInfo;
}

export default CallLogExtractSyncResponse;
