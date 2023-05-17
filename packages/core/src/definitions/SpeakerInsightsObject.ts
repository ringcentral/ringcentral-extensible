import SpeakerInsightsUnit from './SpeakerInsightsUnit';

interface SpeakerInsightsObject {
  /**
   * Format: int32
   * Example: 2
   */
  speakerCount?: number;

  /**
   */
  insights?: SpeakerInsightsUnit[];
}

export default SpeakerInsightsObject;
