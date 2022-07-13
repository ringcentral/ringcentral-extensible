import CallsByOrigin from './CallsByOrigin';

interface PerformanceCallsByOrigin {
  /**
   * Required
   */
  valueType?: ('Percent' | 'Seconds' | 'Instances');

  /**
   * Required
   */
  values?: CallsByOrigin;
}

export default PerformanceCallsByOrigin;
