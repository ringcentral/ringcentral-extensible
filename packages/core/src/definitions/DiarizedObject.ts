import DiarizeSegment from './DiarizeSegment';

interface DiarizedObject {
  /**
   * Required
   * Format: int32
   * Example: 3
   */
  speakerCount?: number;

  /**
   * Required
   */
  utterances?: DiarizeSegment[];
}

export default DiarizedObject;
