import DiarizeSegment from './DiarizeSegment';

interface DiarizeApiResponseResponse {
  /**
   * Format: int32
   * Example: 3
   */
  speakerCount?: number;

  /**
   */
  utterances?: DiarizeSegment[];
}

export default DiarizeApiResponseResponse;
