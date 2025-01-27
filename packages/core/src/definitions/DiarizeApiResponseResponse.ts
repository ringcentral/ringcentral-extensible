import DiarizeSegment from "./DiarizeSegment.js";

interface DiarizeApiResponseResponse {
  /**
   * Format: int32
   * Example: 2
   */
  speakerCount?: number;

  /** */
  utterances?: DiarizeSegment[];
}

export default DiarizeApiResponseResponse;
