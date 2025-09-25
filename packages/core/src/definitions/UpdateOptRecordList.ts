import UpdateSmsOptRecord from "./UpdateSmsOptRecord.js";

/**
 * A list of records for updating SMS consents
 */
interface UpdateOptRecordList {
  /**
   * Required
   */
  records?: UpdateSmsOptRecord[];
}

export default UpdateOptRecordList;
