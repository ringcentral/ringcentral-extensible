import CallsByActionsBreakdown from "./CallsByActionsBreakdown.js";

/**
 * Data for calls with breakdown by action (HoldOff, HoldOn, ParkOn, ParkOff, BlindTransfer, WarmTransfer, DTMFTransfer)
 */
interface CallsByActions {
  /**
   * Unit of the result value
   * Required
   */
  valueType?: "Percent" | "Seconds" | "Instances";

  /**
   * Required
   */
  values?: CallsByActionsBreakdown;
}

export default CallsByActions;
