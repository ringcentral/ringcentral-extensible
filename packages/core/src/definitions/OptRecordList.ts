import SmsOptRecord from "./SmsOptRecord.js";
import NonEnumeratedPagingModel from "./NonEnumeratedPagingModel.js";

/**
 * The list of records with opt statuses
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
