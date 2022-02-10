import {CallsByQueueSla} from './index';

class PerformanceCallsByQueueSla {
  /**
   * Required
   */
  valueType?: 'Percent' | 'Seconds' | 'Instances';

  /**
   * Required
   */
  values?: CallsByQueueSla;
}
export default PerformanceCallsByQueueSla;
