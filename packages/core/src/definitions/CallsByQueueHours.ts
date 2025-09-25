import CallsByQueueHoursBreakdown from "./CallsByQueueHoursBreakdown.js";

/**
 * Data for calls with breakdown by queue hours (BusinessHours, AfterHours)
 */
interface CallsByQueueHours {
  /**
   * Unit of the result value
   * Required
   */
  valueType?: "Percent" | "Seconds" | "Instances";

  /**
   * Required
   */
  values?: CallsByQueueHoursBreakdown;
}

export default CallsByQueueHours;
