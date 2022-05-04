import { CallsByCompanyHours } from './index';

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
