import TimelineResponseOptionsCounters from "./TimelineResponseOptionsCounters.js";
import TimelineResponseOptionsTimers from "./TimelineResponseOptionsTimers.js";

/**
 * Counters and timers options for calls breakdown
 */
interface TimelineResponseOptions {
  /** */
  counters?: TimelineResponseOptionsCounters;

  /** */
  timers?: TimelineResponseOptionsTimers;
}

export default TimelineResponseOptions;
