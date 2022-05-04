import CallsByCompanyHours from './CallsByCompanyHours';

class PerformanceCallsByCompanyHours {
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
