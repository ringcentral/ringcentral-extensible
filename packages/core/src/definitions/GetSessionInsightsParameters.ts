/**
 * Query parameters for operation getSessionInsights
 */
interface GetSessionInsightsParameters {
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
  )[];
}

export default GetSessionInsightsParameters;
