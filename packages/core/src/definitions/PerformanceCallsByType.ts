import CallsByType from './CallsByType';

class PerformanceCallsByType {
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
