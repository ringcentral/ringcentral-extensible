import type UtteranceInsightsObject from "./UtteranceInsightsObject";
import type SpeakerInsightsObject from "./SpeakerInsightsObject";
import type ConversationalInsightsUnit from "./ConversationalInsightsUnit";

interface InteractionObject {
  /** */
  utteranceInsights?: UtteranceInsightsObject[];

  /** */
  speakerInsights?: SpeakerInsightsObject;

  /** */
  conversationalInsights?: ConversationalInsightsUnit[];
}

export default InteractionObject;
