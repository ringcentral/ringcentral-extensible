interface DisabledFilterInfo {
  /**
   * Event filter that is disabled for the user
   * Required
   */
  filter?: string;

  /**
   * Reason why the filter is disabled for the user
   * Required
   */
  reason?: string;

  /**
   * Error message
   */
  message?: string;
}

export default DisabledFilterInfo;
