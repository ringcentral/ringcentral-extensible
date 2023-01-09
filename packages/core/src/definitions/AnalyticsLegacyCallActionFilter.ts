interface AnalyticsLegacyCallActionFilter {
  /**
   * Required
   */
  callAction?: ('HoldOff' | 'HoldOn' | 'ParkOn' | 'ParkOff' | 'BlindTransfer' | 'WarmTransfer' | 'DTMFTransfer');
}

export default AnalyticsLegacyCallActionFilter;
