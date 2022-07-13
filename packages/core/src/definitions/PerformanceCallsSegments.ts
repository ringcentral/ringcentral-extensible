import CallsSegments from './CallsSegments';

interface PerformanceCallsSegments {
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
