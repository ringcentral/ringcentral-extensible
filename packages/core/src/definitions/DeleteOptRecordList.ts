import MinimalSmsOptRecord from "./MinimalSmsOptRecord.js";

/**
 * A list of records for deleting SMS consents
 */
interface DeleteOptRecordList {
  /**
   * Required
   */
  records?: MinimalSmsOptRecord[];
}

export default DeleteOptRecordList;
