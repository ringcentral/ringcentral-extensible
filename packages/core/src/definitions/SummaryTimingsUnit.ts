interface SummaryTimingsUnit {
  /**
   * Format: float
   * Example: 0.97
   */
  confidence?: number;

  /**
   * Required
   * Example: This meeting is focussed on rise of on demand marketplaces, online marketplaces and regulated services
   */
  value?: string;

  /**
   * Format: float
   * Example: 0.3
   */
  start?: number;

  /**
   * Format: float
   * Example: 3600.1
   */
  end?: number;
}

export default SummaryTimingsUnit;
