/**
 * Result breakdown by actions
 */
interface CallsByActionsBreakdown {
  /**
   * Value for ParkOn action
   * Required
   * Format: double
   */
  parkOn?: number;

  /**
   * Value for ParkOff action
   * Required
   * Format: double
   */
  parkOff?: number;

  /**
   * Value for HoldOn action
   * Required
   * Format: double
   */
  holdOn?: number;

  /**
   * Value for HoldOff action
   * Required
   * Format: double
   */
  holdOff?: number;

  /**
   * Value for BlindTransfer action
   * Required
   * Format: double
   */
  blindTransfer?: number;

  /**
   * Value for WarmTransfer action
   * Required
   * Format: double
   */
  warmTransfer?: number;

  /**
   * Value for DTMFTransfer action
   * Required
   * Format: double
   */
  dtmfTransfer?: number;
}

export default CallsByActionsBreakdown;
