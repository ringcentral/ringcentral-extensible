import type UtteranceInsightsObject from "./UtteranceInsightsObject.js";
import type SpeakerInsightsObject from "./SpeakerInsightsObject.js";
import type ConversationalInsightsUnit from "./ConversationalInsightsUnit.js";

interface InteractionObject {
  /**
   */
  utteranceInsights?: UtteranceInsightsObject[];

  /**
   */
  speakerInsights?: SpeakerInsightsObject;

  /**
   */
  conversationalInsights?: ConversationalInsightsUnit[];
}

export default InteractionObject;
