import MinimalSmsOptRecord from "./MinimalSmsOptRecord.js";

/**
 * The list of records to delete opt statuses of phone numbers
 */
interface DeleteOptRecordList {
  /**
   * Required
   */
  records?: MinimalSmsOptRecord[];
}

export default DeleteOptRecordList;
