class PerformanceCallsTimer {
  /**
   * Type of aggregation. If set to 'Min', 'Max' or 'Average' then `aggregationInterval` is supported. If set to 'Sum' or 'Percent' then `aggregationInterval` is not supported
   * Required
   */
  aggregationType?: 'Sum' | 'Average' | 'Max' | 'Min' | 'Percent';

  /**
   * Interval of aggregation
   */
  aggregationInterval?: 'Hour' | 'Day' | 'Week' | 'Month';
}
export default PerformanceCallsTimer;
