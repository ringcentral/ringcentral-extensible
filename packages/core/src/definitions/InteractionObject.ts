import UtteranceInsightsObject from './UtteranceInsightsObject';
import SpeakerInsightsObject from './SpeakerInsightsObject';
import ConversationalInsightsUnit from './ConversationalInsightsUnit';

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
