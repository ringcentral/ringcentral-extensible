import CallsByCompanyHours from './CallsByCompanyHours';

interface PerformanceCallsByCompanyHours {
  /**
   * Required
   */
  valueType?: ('Percent' | 'Seconds' | 'Instances');

  /**
   * Required
   */
  values?: CallsByCompanyHours;
}

export default PerformanceCallsByCompanyHours;
