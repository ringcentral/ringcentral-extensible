import type KeyInfo from './KeyInfo';
import type TimelineResponsePoint from './TimelineResponsePoint';

interface TimelineResponseRecord {
  /**
   * Grouping key
   * Required
   */
  key?: string;

  /**
   */
  info?: KeyInfo;

  /**
   * List of requested call data time-value points
   */
  points?: TimelineResponsePoint[];
}

export default TimelineResponseRecord;
