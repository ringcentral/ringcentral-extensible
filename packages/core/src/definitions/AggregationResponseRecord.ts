import KeyInfo from "./KeyInfo.js";
import CallsTimers from "./CallsTimers.js";
import CallsCounters from "./CallsCounters.js";

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
