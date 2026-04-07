/**
 * Query parameters for operation getRecordingInsights
 */
interface GetRecordingInsightsParameters {
  /**
   * AI Insight Types
   */
  insightTypes?: (
    | "NextSteps"
    | "Transcript"
    | "Summary"
    | "Highlights"
    | "BulletedSummary"
    | "AIScore"
    | "CallNotes"
    | "Sentiment"
  )[];
}

export default GetRecordingInsightsParameters;
