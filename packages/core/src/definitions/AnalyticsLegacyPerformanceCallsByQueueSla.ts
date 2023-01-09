import AnalyticsLegacyCallsByQueueSla from './AnalyticsLegacyCallsByQueueSla';

interface AnalyticsLegacyPerformanceCallsByQueueSla {
  /**
   * Required
   */
  valueType?: ('Percent' | 'Seconds' | 'Instances');

  /**
   * Required
   */
  values?: AnalyticsLegacyCallsByQueueSla;
}

export default AnalyticsLegacyPerformanceCallsByQueueSla;
