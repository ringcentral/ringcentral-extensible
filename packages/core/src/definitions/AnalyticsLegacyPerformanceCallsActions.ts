import AnalyticsLegacyCallsActions from './AnalyticsLegacyCallsActions';

interface AnalyticsLegacyPerformanceCallsActions {
  /**
   * Required
   */
  valueType?: ('Percent' | 'Seconds' | 'Instances');

  /**
   * Required
   */
  values?: AnalyticsLegacyCallsActions;
}

export default AnalyticsLegacyPerformanceCallsActions;
