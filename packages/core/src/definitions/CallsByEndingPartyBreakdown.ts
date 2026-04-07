interface CallsByEndingPartyBreakdown {
  /**
   * Value for Caller ending party
   * Required
   * Format: double
   */
  caller?: number;

  /**
   * Value for Callee ending party
   * Required
   * Format: double
   */
  callee?: number;

  /**
   * Value for System ending party
   * Required
   * Format: double
   */
  system?: number;
}

export default CallsByEndingPartyBreakdown;
