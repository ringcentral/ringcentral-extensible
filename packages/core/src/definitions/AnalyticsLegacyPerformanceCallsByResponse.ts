import AnalyticsLegacyCallsByResponse from './AnalyticsLegacyCallsByResponse';

interface AnalyticsLegacyPerformanceCallsByResponse {
  /**
   * Required
   */
  valueType?: ('Percent' | 'Seconds' | 'Instances');

  /**
   * Required
   */
  values?: AnalyticsLegacyCallsByResponse;
}

export default AnalyticsLegacyPerformanceCallsByResponse;
