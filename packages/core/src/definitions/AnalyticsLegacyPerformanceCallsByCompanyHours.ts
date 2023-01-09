import AnalyticsLegacyCallsByCompanyHours from './AnalyticsLegacyCallsByCompanyHours';

interface AnalyticsLegacyPerformanceCallsByCompanyHours {
  /**
   * Required
   */
  valueType?: ('Percent' | 'Seconds' | 'Instances');

  /**
   * Required
   */
  values?: AnalyticsLegacyCallsByCompanyHours;
}

export default AnalyticsLegacyPerformanceCallsByCompanyHours;
