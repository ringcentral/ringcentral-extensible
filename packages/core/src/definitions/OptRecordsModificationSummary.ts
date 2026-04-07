import type SmsOptFailureRecord from "./SmsOptFailureRecord.js";

interface OptRecordsModificationSummary {
  /**
   */
  failedRecords?: SmsOptFailureRecord[];
}

export default OptRecordsModificationSummary;
