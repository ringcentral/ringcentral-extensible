import type NonEnumeratedPagingModel from "./NonEnumeratedPagingModel.js";
import type SmsOptRecord from "./SmsOptRecord.js";

/**
 * A list of SMS consent records
 */
interface OptRecordList {
  /**
   * Required
   */
  records?: SmsOptRecord[];

  /**
   * Required
   */
  paging?: NonEnumeratedPagingModel;
}

export default OptRecordList;
