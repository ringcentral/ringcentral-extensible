import CallsByResult from './CallsByResult';

interface PerformanceCallsByResult {
  /**
   * Required
   */
  valueType?: ('Percent' | 'Seconds' | 'Instances');

  /**
   * Required
   */
  values?: CallsByResult;
}

export default PerformanceCallsByResult;
