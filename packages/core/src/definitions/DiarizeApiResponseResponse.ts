import type DiarizeSegment from "./DiarizeSegment";

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
