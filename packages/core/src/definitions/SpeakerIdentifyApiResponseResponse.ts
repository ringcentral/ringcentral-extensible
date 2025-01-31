import DiarizeSegment from "./DiarizeSegment.js";

interface SpeakerIdentifyApiResponseResponse {
  /** */
  utterances?: DiarizeSegment[];
}

export default SpeakerIdentifyApiResponseResponse;
