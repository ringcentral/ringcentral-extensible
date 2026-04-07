import type AIScoreInsightUnit from "./AIScoreInsightUnit.js";
import type BulletedSummaryInsightUnit from "./BulletedSummaryInsightUnit.js";
import type CallNotesInsightUnit from "./CallNotesInsightUnit.js";
import type HighlightsInsightUnit from "./HighlightsInsightUnit.js";
import type NextStepsInsightUnit from "./NextStepsInsightUnit.js";
import type SentimentInsightUnit from "./SentimentInsightUnit.js";
import type SummaryInsightUnit from "./SummaryInsightUnit.js";
import type TranscriptInsightUnit from "./TranscriptInsightUnit.js";

interface AIInsights {
  /**
   */
  Transcript?: TranscriptInsightUnit[];

  /**
   */
  Summary?: SummaryInsightUnit[];

  /**
   */
  Highlights?: HighlightsInsightUnit[];

  /**
   */
  NextSteps?: NextStepsInsightUnit[];

  /**
   */
  BulletedSummary?: BulletedSummaryInsightUnit[];

  /**
   */
  AIScore?: AIScoreInsightUnit[];

  /**
   */
  CallNotes?: CallNotesInsightUnit[];

  /**
   */
  Sentiment?: SentimentInsightUnit[];
}

export default AIInsights;
