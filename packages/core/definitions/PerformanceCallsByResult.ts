import { CallsByResult } from './index';

class PerformanceCallsByResult {
  /**
   * Required
   */
  valueType?: 'Percent' | 'Seconds' | 'Instances';

  /**
   * Required
   */
  values?: CallsByResult;
}
export default PerformanceCallsByResult;
