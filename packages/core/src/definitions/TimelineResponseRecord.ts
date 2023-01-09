import KeyInfo from './KeyInfo';
import TimelineResponsePoint from './TimelineResponsePoint';

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
