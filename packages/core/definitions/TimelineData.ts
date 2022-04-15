import { KeyInfo, TimelineDataPoint } from './index';

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
