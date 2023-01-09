import AnalyticsLegacyCallsByType from './AnalyticsLegacyCallsByType';

interface AnalyticsLegacyPerformanceCallsByType {
  /**
   * Required
   */
  valueType?: ('Percent' | 'Seconds' | 'Instances');

  /**
   * Required
   */
  values?: AnalyticsLegacyCallsByType;
}

export default AnalyticsLegacyPerformanceCallsByType;
