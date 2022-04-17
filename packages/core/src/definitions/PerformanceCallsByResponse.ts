import { CallsByResponse } from './index';

class PerformanceCallsByResponse {
  /**
   * Required
   */
  valueType?: 'Percent' | 'Seconds' | 'Instances';

  /**
   * Required
   */
  values?: CallsByResponse;
}
export default PerformanceCallsByResponse;
