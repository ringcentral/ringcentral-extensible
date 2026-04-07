import type CallsCounters from "./CallsCounters.js";
import type CallsTimers from "./CallsTimers.js";
import type KeyInfo from "./KeyInfo.js";

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
