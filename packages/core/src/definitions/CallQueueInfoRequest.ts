/**
 * For Call Queue extension type only. Please note that legacy 'Department'
 * extension type corresponds to 'Call Queue' extensions in modern RingCentral
 * product terminology
 *
 */
interface CallQueueInfoRequest {
  /**
   * Target percentage of calls that must be answered by agents
   *  within the service level time threshold
   * Format: int32
   */
  slaGoal?: number;

  /**
   * Format: int32
   */
  slaThresholdSeconds?: number;

  /**
   */
  includeAbandonedCalls?: boolean;

  /**
   * Format: int32
   */
  abandonedThresholdSeconds?: number;
}

export default CallQueueInfoRequest;
