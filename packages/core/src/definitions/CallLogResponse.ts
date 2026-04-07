import CallLogRecord from "./CallLogRecord.js";
import PageNavigationModel from "./PageNavigationModel.js";
import EnumeratedPagingModel from "./EnumeratedPagingModel.js";

interface CallLogResponse {
  /**
   * Link to the list of company/user call log records
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
  navigation?: PageNavigationModel;

  /**
   * Required
   */
  paging?: EnumeratedPagingModel;
}

export default CallLogResponse;
