import type KeyInfo from "./KeyInfo.js";
import type CallsTimers from "./CallsTimers.js";
import type CallsCounters from "./CallsCounters.js";

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
