import SpeakerInsightsValuesItems from "./SpeakerInsightsValuesItems.js";

interface SpeakerInsightsUnit {
    /**
   * Required
   * Example: TalkToListenRatio
   */
  name?: ('Pace' | 'TalkToListenRatio' | 'QuestionsAsked');

  /**
   * Required
   */
  values?: SpeakerInsightsValuesItems[];
}

export default SpeakerInsightsUnit;
