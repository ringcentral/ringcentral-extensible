import AnalyticsLegacyCallsByDirection from './AnalyticsLegacyCallsByDirection';

interface AnalyticsLegacyPerformanceCallsByDirection {
  /**
   * Required
   */
  valueType?: ('Percent' | 'Seconds' | 'Instances');

  /**
   * Required
   */
  values?: AnalyticsLegacyCallsByDirection;
}

export default AnalyticsLegacyPerformanceCallsByDirection;
