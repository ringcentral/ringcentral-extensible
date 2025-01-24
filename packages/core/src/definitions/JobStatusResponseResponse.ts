import type UtteranceObject from "./UtteranceObject";
import type WordSegment from "./WordSegment";
import type UtteranceInsightsObject from "./UtteranceInsightsObject";
import type SpeakerInsightsObject from "./SpeakerInsightsObject";
import type ConversationalInsightsUnit from "./ConversationalInsightsUnit";

interface JobStatusResponseResponse {
  /**
   * The number of speakers detected. Field is set only when enableSpeakerDiarization is true.
   * Format: int32
   * Example: 2
   */
  speakerCount?: number;

  /**
   * Speaker wise utterances. Field is set only when enableSpeakerDiarization is true.
   */
  utterances?: UtteranceObject[];

  /** */
  words?: WordSegment[];

  /**
   * Overall transcription confidence.
   * Format: float
   */
  confidence?: number;

  /**
   * The entire transcript with/without punctuations according to the input.
   */
  transcript?: string;

  /** */
  utteranceInsights?: UtteranceInsightsObject[];

  /** */
  speakerInsights?: SpeakerInsightsObject;

  /** */
  conversationalInsights?: ConversationalInsightsUnit[];
}

export default JobStatusResponseResponse;
