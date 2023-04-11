import WordSegment from './WordSegment';

interface AsrApiResponseResponse {
  /**
   * The number of speakers detected. Field is set only when enableSpeakerDiarization is true.
   * Format: int32
   * Example: 3
   */
  speakerCount?: number;

  /**
   */
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
}

export default AsrApiResponseResponse;
