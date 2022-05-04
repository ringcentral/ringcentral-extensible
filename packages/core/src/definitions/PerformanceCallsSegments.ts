import { CallsSegments } from './index';

class PerformanceCallsSegments {
  /**
   * Required
   */
  valueType?: ('Percent' | 'Seconds' | 'Instances');

  /**
   * Required
   */
  values?: CallsSegments;
}
export default PerformanceCallsSegments;
