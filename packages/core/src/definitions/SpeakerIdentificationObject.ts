import type DiarizeSegment from './DiarizeSegment';

interface SpeakerIdentificationObject {
  /**
   * Required
   */
  utterances?: DiarizeSegment[];
}

export default SpeakerIdentificationObject;
