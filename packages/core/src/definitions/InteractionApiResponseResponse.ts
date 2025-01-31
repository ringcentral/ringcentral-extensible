import UtteranceInsightsObject from "./UtteranceInsightsObject.js";
import SpeakerInsightsObject from "./SpeakerInsightsObject.js";
import ConversationalInsightsUnit from "./ConversationalInsightsUnit.js";

interface InteractionApiResponseResponse {
  /** */
  utteranceInsights?: UtteranceInsightsObject[];

  /** */
  speakerInsights?: SpeakerInsightsObject;

  /** */
  conversationalInsights?: ConversationalInsightsUnit[];
}

export default InteractionApiResponseResponse;
