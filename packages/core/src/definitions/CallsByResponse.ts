import CallsByResponseBreakdown from "./CallsByResponseBreakdown.js";

/**
 * Data for calls with breakdown by response (Answered, NotAnswered, Connected, NotConnected)
 */
interface CallsByResponse {
  /**
   * Unit of the result value
   * Required
   */
  valueType?: "Percent" | "Seconds" | "Instances";

  /**
   * Required
   */
  values?: CallsByResponseBreakdown;
}

export default CallsByResponse;
