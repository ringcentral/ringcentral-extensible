import CallsActions from './CallsActions';

interface PerformanceCallsActions {
  /**
   * Required
   */
  valueType?: ('Percent' | 'Seconds' | 'Instances');

  /**
   * Required
   */
  values?: CallsActions;
}

export default PerformanceCallsActions;
