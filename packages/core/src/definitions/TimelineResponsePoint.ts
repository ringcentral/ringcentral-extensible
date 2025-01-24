import type CallsTimers from "./CallsTimers";
import type CallsCounters from "./CallsCounters";

interface TimelineResponsePoint {
  /**
   * Time point in RFC 3339 format
   * Required
   * Format: date-time
   */
  time?: string;

  /** */
  timers?: CallsTimers;

  /** */
  counters?: CallsCounters;
}

export default TimelineResponsePoint;
