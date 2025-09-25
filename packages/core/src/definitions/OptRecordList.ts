import SmsOptRecord from "./SmsOptRecord.js";
import NonEnumeratedPagingModel from "./NonEnumeratedPagingModel.js";

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
