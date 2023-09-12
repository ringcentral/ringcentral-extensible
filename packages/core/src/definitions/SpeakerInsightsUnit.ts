import SpeakerInsightsValuesItems from './SpeakerInsightsValuesItems';

interface SpeakerInsightsUnit {
  /**
   * Required
   * Example: TalkToListenRatio
   */
  name?: ('Energy' | 'Pace' | 'TalkToListenRatio' | 'Patience' | 'LongestMonologue' | 'FillerWordRate' | 'TalkingSpeed' | 'TalkTime' | 'QuestionsAsked' | 'Tone' | 'Interruptions');

  /**
   * Required
   */
  values?: SpeakerInsightsValuesItems[];
}

export default SpeakerInsightsUnit;
