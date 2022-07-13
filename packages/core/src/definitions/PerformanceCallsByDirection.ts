import CallsByDirection from './CallsByDirection';

interface PerformanceCallsByDirection {
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
