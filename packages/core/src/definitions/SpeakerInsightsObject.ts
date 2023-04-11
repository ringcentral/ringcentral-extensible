import SpeakerInsightsUnit from './SpeakerInsightsUnit';

interface SpeakerInsightsObject {
  /**
   * Format: int32
   * Example: 3
   */
  speakerCount?: number;

  /**
   */
  insights?: SpeakerInsightsUnit[];
}

export default SpeakerInsightsObject;
