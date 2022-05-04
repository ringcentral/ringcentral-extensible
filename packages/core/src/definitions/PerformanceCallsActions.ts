import CallsActions from './CallsActions';

class PerformanceCallsActions {
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
