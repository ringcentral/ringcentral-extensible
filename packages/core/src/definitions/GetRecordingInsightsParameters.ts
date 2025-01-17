/**
 * Query parameters for operation getRecordingInsights
 */
interface GetRecordingInsightsParameters {
  /**
   * AI Insight Types
   */
  insightTypes?: ('NextSteps' | 'Transcript' | 'Summary' | 'Highlights' | 'BulletedSummary' | 'AIScore')[];
}

export default GetRecordingInsightsParameters;
