import UtteranceInsightsObject from "./UtteranceInsightsObject.js";
import SpeakerInsightsObject from "./SpeakerInsightsObject.js";
import ConversationalInsightsUnit from "./ConversationalInsightsUnit.js";

interface InteractionObject {
  /** */
  utteranceInsights?: UtteranceInsightsObject[];

  /** */
  speakerInsights?: SpeakerInsightsObject;

  /** */
  conversationalInsights?: ConversationalInsightsUnit[];
}

export default InteractionObject;
