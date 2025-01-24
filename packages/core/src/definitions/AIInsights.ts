import type TranscriptInsightUnit from "./TranscriptInsightUnit";
import type SummaryInsightUnit from "./SummaryInsightUnit";
import type HighlightsInsightUnit from "./HighlightsInsightUnit";
import type NextStepsInsightUnit from "./NextStepsInsightUnit";
import type BulletedSummaryInsightUnit from "./BulletedSummaryInsightUnit";
import type AIScoreInsightUnit from "./AIScoreInsightUnit";

interface AIInsights {
  /** */
  Transcript?: TranscriptInsightUnit[];

  /** */
  Summary?: SummaryInsightUnit[];

  /** */
  Highlights?: HighlightsInsightUnit[];

  /** */
  NextSteps?: NextStepsInsightUnit[];

  /** */
  BulletedSummary?: BulletedSummaryInsightUnit[];

  /** */
  AIScore?: AIScoreInsightUnit[];
}

export default AIInsights;
