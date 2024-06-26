interface OnDemandResource {
  /**
   * Flag for controlling OnDemand Call Recording settings
   */
  enabled?: boolean;

  /**
   * Retention period of a call recording, the default value is 90 days
   * Format: int32
   */
  retentionPeriod?: number;
}

export default OnDemandResource;
