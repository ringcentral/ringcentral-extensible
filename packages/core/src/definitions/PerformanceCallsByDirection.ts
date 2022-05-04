import CallsByDirection from './CallsByDirection';

class PerformanceCallsByDirection {
  /**
   * Required
   */
  valueType?: ('Percent' | 'Seconds' | 'Instances');

  /**
   * Required
   */
  values?: CallsByDirection;
}

export default PerformanceCallsByDirection;
