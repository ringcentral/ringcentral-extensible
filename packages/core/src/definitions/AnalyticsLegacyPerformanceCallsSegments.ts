import AnalyticsLegacyCallsSegments from './AnalyticsLegacyCallsSegments';

interface AnalyticsLegacyPerformanceCallsSegments {
  /**
   * Required
   */
  valueType?: ('Percent' | 'Seconds' | 'Instances');

  /**
   * Required
   */
  values?: AnalyticsLegacyCallsSegments;
}

export default AnalyticsLegacyPerformanceCallsSegments;
