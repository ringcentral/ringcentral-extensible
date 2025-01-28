import CallsByDirectionBreakdown from "./CallsByDirectionBreakdown";

/**
 * Data for calls with breakdown by direction (Inbound, Outbound)
 */
interface CallsByDirection {
  /**
   * Unit of the result value
   * Required
   */
  valueType?: "Percent" | "Seconds" | "Instances";

  /**
   * Required
   */
  values?: CallsByDirectionBreakdown;
}

export default CallsByDirection;
