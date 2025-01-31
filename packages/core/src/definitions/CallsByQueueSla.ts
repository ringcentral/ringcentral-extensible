import CallsByQueueSlaBreakdown from "./CallsByQueueSlaBreakdown.js";

/**
 * Data for calls with breakdown by queue SLA (InSLA, OutSLA). This counter is only applicable to Queues grouping
 */
interface CallsByQueueSla {
  /**
   * Unit of the result value
   * Required
   */
  valueType?: "Percent" | "Seconds" | "Instances";

  /**
   * Required
   */
  values?: CallsByQueueSlaBreakdown;
}

export default CallsByQueueSla;
