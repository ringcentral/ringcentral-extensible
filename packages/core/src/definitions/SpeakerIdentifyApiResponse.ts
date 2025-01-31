import SpeakerIdentifyApiResponseResponse from "./SpeakerIdentifyApiResponseResponse.js";

interface SpeakerIdentifyApiResponse {
  /** */
  status?: "Success" | "Fail";

  /** */
  response?: SpeakerIdentifyApiResponseResponse;
}

export default SpeakerIdentifyApiResponse;
