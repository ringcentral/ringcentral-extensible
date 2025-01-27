import DiarizeSegment from "./DiarizeSegment.js";

interface SpeakerIdentificationObject {
  /**
   * Required
   */
  utterances?: DiarizeSegment[];
}

export default SpeakerIdentificationObject;
