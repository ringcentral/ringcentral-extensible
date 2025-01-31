import SpeakerInsightsUnit from "./SpeakerInsightsUnit.js";

interface SpeakerInsightsObject {
  /**
   * Format: int32
   * Example: 2
   */
  speakerCount?: number;

  /** */
  insights?: SpeakerInsightsUnit[];
}

export default SpeakerInsightsObject;
