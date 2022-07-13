import CallsByResponse from './CallsByResponse';

interface PerformanceCallsByResponse {
  /**
   * Required
   */
  valueType?: ('Percent' | 'Seconds' | 'Instances');

  /**
   * Required
   */
  values?: CallsByResponse;
}

export default PerformanceCallsByResponse;
