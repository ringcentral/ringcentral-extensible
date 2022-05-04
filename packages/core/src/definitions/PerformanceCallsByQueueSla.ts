import CallsByQueueSla from './CallsByQueueSla';

class PerformanceCallsByQueueSla {
  /**
   * Required
   */
  valueType?: ('Percent' | 'Seconds' | 'Instances');

  /**
   * Required
   */
  values?: CallsByQueueSla;
}

export default PerformanceCallsByQueueSla;
