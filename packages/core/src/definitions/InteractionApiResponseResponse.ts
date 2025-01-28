import UtteranceInsightsObject from "./UtteranceInsightsObject";
import SpeakerInsightsObject from "./SpeakerInsightsObject";
import ConversationalInsightsUnit from "./ConversationalInsightsUnit";

interface InteractionApiResponseResponse {
  /** */
  utteranceInsights?: UtteranceInsightsObject[];

  /** */
  speakerInsights?: SpeakerInsightsObject;

  /** */
  conversationalInsights?: ConversationalInsightsUnit[];
}

export default InteractionApiResponseResponse;
