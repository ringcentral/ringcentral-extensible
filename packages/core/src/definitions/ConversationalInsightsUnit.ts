import type ConversationalInsightsUnitValues from "./ConversationalInsightsUnitValues";

interface ConversationalInsightsUnit {
  /**
   * Required
   * Example: KeyPhrases
   */
  name?:
    | "ExtractiveSummary"
    | "AbstractiveSummaryLong"
    | "AbstractiveSummaryShort"
    | "KeyPhrases"
    | "QuestionsAsked"
    | "OverallSentiment"
    | "Topics";

  /**
   * Required
   */
  values?: ConversationalInsightsUnitValues[];
}

export default ConversationalInsightsUnit;
