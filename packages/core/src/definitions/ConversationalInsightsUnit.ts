import ConversationalInsightsUnitValues from './ConversationalInsightsUnitValues';

interface ConversationalInsightsUnit {
  /**
   * Required
   * Example: KeyPhrases
   */
  name?: ('ExtractiveSummary' | 'AbstractiveSummaryLong' | 'AbstractiveSummaryShort' | 'KeyPhrases' | 'Tasks' | 'Titles' | 'QuestionsAsked' | 'OverallSentiment' | 'Topics');

  /**
   * Required
   */
  values?: ConversationalInsightsUnitValues[];
}

export default ConversationalInsightsUnit;
