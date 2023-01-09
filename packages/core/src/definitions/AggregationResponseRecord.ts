import KeyInfo from './KeyInfo';
import CallsTimers from './CallsTimers';
import CallsCounters from './CallsCounters';

interface AggregationResponseRecord {
  /**
   * Grouping key
   * Required
   */
  key?: string;

  /**
   */
  info?: KeyInfo;

  /**
   */
  timers?: CallsTimers;

  /**
   */
  counters?: CallsCounters;
}

export default AggregationResponseRecord;
