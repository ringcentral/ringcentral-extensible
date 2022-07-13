import CallsByQueueSla from './CallsByQueueSla';

interface PerformanceCallsByQueueSla {
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
