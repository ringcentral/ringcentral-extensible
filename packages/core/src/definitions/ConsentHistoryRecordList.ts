import type NonEnumeratedPagingModel from "./NonEnumeratedPagingModel.js";
import type SmsOptHistoryRecord from "./SmsOptHistoryRecord.js";

/**
 * A list of SMS consent records
 */
interface ConsentHistoryRecordList {
  /**
   * Required
   */
  records?: SmsOptHistoryRecord[];

  /**
   * Required
   */
  paging?: NonEnumeratedPagingModel;
}

export default ConsentHistoryRecordList;
