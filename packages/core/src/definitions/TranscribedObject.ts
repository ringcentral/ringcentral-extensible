import UtteranceObject from "./UtteranceObject";
import WordSegment from "./WordSegment";

interface TranscribedObject {
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

  /**
   * Required
   */
  words?: WordSegment[];

  /**
   * Overall transcription confidence.
   * Format: float
   */
  confidence?: number;

  /**
   * The entire transcript with/without punctuations according to the input.
   * Required
   */
  transcript?: string;
}

export default TranscribedObject;
