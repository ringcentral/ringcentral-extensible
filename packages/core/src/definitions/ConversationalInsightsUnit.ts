import ConversationalInsightsUnitValues from './ConversationalInsightsUnitValues';

interface ConversationalInsightsUnit {
  /**
   * Required
   * Example: KeyPhrases
   */
  name?: ('ExtractiveSummary' | 'AbstractiveSummaryLong' | 'AbstractiveSummaryShort' | 'KeyPhrases' | 'Tasks' | 'Titles' | 'QuestionsAsked');

  /**
   * Required
   */
  values?: ConversationalInsightsUnitValues[];
}

export default ConversationalInsightsUnit;
