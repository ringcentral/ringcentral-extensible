import CallsByType from './CallsByType';

interface PerformanceCallsByType {
  /**
   * Required
   */
  valueType?: ('Percent' | 'Seconds' | 'Instances');

  /**
   * Required
   */
  values?: CallsByType;
}

export default PerformanceCallsByType;
