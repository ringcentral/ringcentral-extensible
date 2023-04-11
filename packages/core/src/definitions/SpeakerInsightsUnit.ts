import SpeakerInsightsValuesItems from './SpeakerInsightsValuesItems';

interface SpeakerInsightsUnit {
  /**
   * Required
   * Example: TalkToListenRatio
   */
  name?: ('Energy' | 'Pace' | 'TalkToListenRatio');

  /**
   * Required
   */
  values?: SpeakerInsightsValuesItems[];
}

export default SpeakerInsightsUnit;
