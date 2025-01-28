import SpeakerInsightsValuesItems from "./SpeakerInsightsValuesItems";

interface SpeakerInsightsUnit {
  /**
   * Required
   * Example: TalkToListenRatio
   */
  name?: "Energy" | "Pace" | "TalkToListenRatio" | "QuestionsAsked";

  /**
   * Required
   */
  values?: SpeakerInsightsValuesItems[];
}

export default SpeakerInsightsUnit;
