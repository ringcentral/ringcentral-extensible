import KeyInfo from './KeyInfo';
import TimelineDataPoint from './TimelineDataPoint';

class TimelineData {
  /**
   * Required
   */
  key?: string;

  /**
   */
  keyInfo?: KeyInfo;

  /**
   */
  points?: TimelineDataPoint[];
}

export default TimelineData;
