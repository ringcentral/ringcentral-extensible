import AnalyticsLegacyCallsByResult from './AnalyticsLegacyCallsByResult';

interface AnalyticsLegacyPerformanceCallsByResult {
  /**
   * Required
   */
  valueType?: ('Percent' | 'Seconds' | 'Instances');

  /**
   * Required
   */
  values?: AnalyticsLegacyCallsByResult;
}

export default AnalyticsLegacyPerformanceCallsByResult;
