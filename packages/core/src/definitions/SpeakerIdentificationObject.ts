import DiarizeSegment from "./DiarizeSegment";

interface SpeakerIdentificationObject {
  /**
   * Required
   */
  utterances?: DiarizeSegment[];
}

export default SpeakerIdentificationObject;
