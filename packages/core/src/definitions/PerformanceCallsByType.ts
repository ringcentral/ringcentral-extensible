import { CallsByType } from './index';

class PerformanceCallsByType {
  /**
   * Required
   */
  valueType?: ('Percent' | 'Seconds' | 'Instances');

  /**
   * Required
   */
  values?: CallsByType;
}
export default PerformanceCallsByType;
