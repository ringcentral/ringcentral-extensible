import CallsByResultBreakdown from "./CallsByResultBreakdown.js";

/**
 * Data for calls with breakdown by result (Completed, Abandoned, Voicemail, Unknown, Missed, Accepted)
 */
interface CallsByResult {
  /**
   * Unit of the result value
   * Required
   */
  valueType?: "Percent" | "Seconds" | "Instances";

  /**
   * Required
   */
  values?: CallsByResultBreakdown;
}

export default CallsByResult;
