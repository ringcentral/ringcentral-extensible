import type TranscriptInsightUnit from "./TranscriptInsightUnit.js";
import type SummaryInsightUnit from "./SummaryInsightUnit.js";
import type HighlightsInsightUnit from "./HighlightsInsightUnit.js";
import type NextStepsInsightUnit from "./NextStepsInsightUnit.js";
import type BulletedSummaryInsightUnit from "./BulletedSummaryInsightUnit.js";
import type AIScoreInsightUnit from "./AIScoreInsightUnit.js";
import type CallNotesInsightUnit from "./CallNotesInsightUnit.js";
import type SentimentInsightUnit from "./SentimentInsightUnit.js";

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
