import UpdateSmsOptRecord from "./UpdateSmsOptRecord.js";

/**
 * The list of records to update opt statuses of phone numbers
 */
interface UpdateOptRecordList {
  /**
   * Required
   */
  records?: UpdateSmsOptRecord[];
}

export default UpdateOptRecordList;
