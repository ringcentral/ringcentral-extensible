import CallsByOriginBreakdown from "./CallsByOriginBreakdown";

/**
 * Data for calls with breakdown by origin (Internal, External)
 */
interface CallsByOrigin {
  /**
   * Unit of the result value
   * Required
   */
  valueType?: "Percent" | "Seconds" | "Instances";

  /**
   * Required
   */
  values?: CallsByOriginBreakdown;
}

export default CallsByOrigin;
