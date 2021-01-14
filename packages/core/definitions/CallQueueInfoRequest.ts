// For Department extension type only. Call queue settings
class CallQueueInfoRequest {
  /**
   * Target percentage of calls that must be answered by agents within the service level time threshold
   */
  slaGoal?: number;

  /**
   */
  slaThresholdSeconds?: number;

  /**
   */
  includeAbandonedCalls?: boolean;

  /**
   */
  abandonedThresholdSeconds?: number;
}

export default CallQueueInfoRequest;
