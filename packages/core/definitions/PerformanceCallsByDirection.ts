import { CallsByDirection } from './index';

class PerformanceCallsByDirection {
  /**
   * Required
   */
  valueType?: 'Percent' | 'Seconds' | 'Instances';

  /**
   * Required
   */
  values?: CallsByDirection;
}
export default PerformanceCallsByDirection;
