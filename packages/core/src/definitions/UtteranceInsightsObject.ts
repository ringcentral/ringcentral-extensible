import WordTimingsUnit from './WordTimingsUnit';
import UtteranceInsightsUnit from './UtteranceInsightsUnit';

interface UtteranceInsightsObject {
  /**
   * Required
   * Format: float
   * Example: 0.3
   */
  start?: number;

  /**
   * Required
   * Format: float
   * Example: 5.1
   */
  end?: number;

  /**
   * Required
   * Example: Hello! This is John.
   */
  text?: string;

  /**
   * Format: float
   * Example: 0.97
   */
  confidence?: number;

  /**
   * Example: JohnDoe
   */
  speakerId?: string;

  /**
   */
  wordTimings?: WordTimingsUnit[];

  /**
   */
  insights?: UtteranceInsightsUnit[];
}

export default UtteranceInsightsObject;
