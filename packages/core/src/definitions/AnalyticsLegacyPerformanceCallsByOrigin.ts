import AnalyticsLegacyCallsByOrigin from './AnalyticsLegacyCallsByOrigin';

interface AnalyticsLegacyPerformanceCallsByOrigin {
  /**
   * Required
   */
  valueType?: ('Percent' | 'Seconds' | 'Instances');

  /**
   * Required
   */
  values?: AnalyticsLegacyCallsByOrigin;
}

export default AnalyticsLegacyPerformanceCallsByOrigin;
