import KeyInfo from "./KeyInfo.js";
import TimelineResponsePoint from "./TimelineResponsePoint.js";

interface TimelineResponseRecord {
  /**
   * Grouping key
   * Required
   */
  key?: string;

  /** */
  info?: KeyInfo;

  /**
   * List of requested call data time-value points
   */
  points?: TimelineResponsePoint[];
}

export default TimelineResponseRecord;
