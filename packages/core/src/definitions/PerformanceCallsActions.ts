import { CallsActions } from './index';

class PerformanceCallsActions {
  /**
   * Required
   */
  valueType?: ('Percent' | 'Seconds' | 'Instances');

  /**
   * Required
   */
  values?: CallsActions;
}
export default PerformanceCallsActions;
