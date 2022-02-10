import {CallsByOrigin} from './index';

class PerformanceCallsByOrigin {
  /**
   * Required
   */
  valueType?: 'Percent' | 'Seconds' | 'Instances';

  /**
   * Required
   */
  values?: CallsByOrigin;
}
export default PerformanceCallsByOrigin;
