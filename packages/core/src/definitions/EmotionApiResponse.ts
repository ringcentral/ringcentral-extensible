import EmotionSegment from "./EmotionSegment.js";

interface EmotionApiResponse {
  /** */
  status?: "Success" | "Fail";

  /** */
  response?: EmotionSegment[];
}

export default EmotionApiResponse;
