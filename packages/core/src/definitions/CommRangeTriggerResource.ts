import CommRangeResource from "./CommRangeResource.js";

interface CommRangeTriggerResource {
  /**
   * Trigger type
   * Required
   * Example: Range
   */
  triggerType?: "Daily" | "Weekly" | "Range";

  /**
   * Required
   */
  ranges?: CommRangeResource[];
}

export default CommRangeTriggerResource;
