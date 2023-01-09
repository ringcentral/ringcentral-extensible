interface AnalyticsLegacyPerformanceCallsTotal {
  /**
   * Required
   */
  valueType?: ('Percent' | 'Seconds' | 'Instances');

  /**
   * Required
   * Format: double
   */
  values?: number;
}

export default AnalyticsLegacyPerformanceCallsTotal;
