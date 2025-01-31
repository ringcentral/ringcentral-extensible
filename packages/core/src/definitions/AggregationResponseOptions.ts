import AggregationResponseOptionsCounters from "./AggregationResponseOptionsCounters.js";
import AggregationResponseOptionsTimers from "./AggregationResponseOptionsTimers.js";

/**
 * This field provides mapping of possible breakdown options for call aggregation and aggregation formula
 */
interface AggregationResponseOptions {
  /** */
  counters?: AggregationResponseOptionsCounters;

  /** */
  timers?: AggregationResponseOptionsTimers;
}

export default AggregationResponseOptions;
