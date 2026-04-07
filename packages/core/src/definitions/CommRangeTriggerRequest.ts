import type CommRangeRequest from "./CommRangeRequest.js";

interface CommRangeTriggerRequest {
  /**
   * Trigger type
   * Required
   * Example: Range
   */
  triggerType?: "Daily" | "Weekly" | "Range";

  /**
   * Required
   */
  ranges?: CommRangeRequest[];
}

export default CommRangeTriggerRequest;
