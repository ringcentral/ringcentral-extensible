import type KeyInfo from "./KeyInfo";
import type CallsTimers from "./CallsTimers";
import type CallsCounters from "./CallsCounters";

interface AggregationResponseRecord {
  /**
   * Grouping key
   * Required
   */
  key?: string;

  /** */
  info?: KeyInfo;

  /** */
  timers?: CallsTimers;

  /** */
  counters?: CallsCounters;
}

export default AggregationResponseRecord;
