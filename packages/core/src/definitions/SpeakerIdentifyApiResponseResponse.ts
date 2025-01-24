import type DiarizeSegment from "./DiarizeSegment";

interface SpeakerIdentifyApiResponseResponse {
  /** */
  utterances?: DiarizeSegment[];
}

export default SpeakerIdentifyApiResponseResponse;
