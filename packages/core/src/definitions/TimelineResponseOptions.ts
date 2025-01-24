import type TimelineResponseOptionsCounters from "./TimelineResponseOptionsCounters";
import type TimelineResponseOptionsTimers from "./TimelineResponseOptionsTimers";

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
