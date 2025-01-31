import DiarizeSegment from "./DiarizeSegment.js";

interface DiarizedObject {
  /**
   * Required
   * Format: int32
   * Example: 2
   */
  speakerCount?: number;

  /**
   * Required
   */
  utterances?: DiarizeSegment[];
}

export default DiarizedObject;
