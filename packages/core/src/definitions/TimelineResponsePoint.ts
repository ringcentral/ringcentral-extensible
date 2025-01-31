import CallsTimers from "./CallsTimers.js";
import CallsCounters from "./CallsCounters.js";

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
