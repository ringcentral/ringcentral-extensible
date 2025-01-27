import TranscriptInsightUnit from "./TranscriptInsightUnit.js";
import SummaryInsightUnit from "./SummaryInsightUnit.js";
import HighlightsInsightUnit from "./HighlightsInsightUnit.js";
import NextStepsInsightUnit from "./NextStepsInsightUnit.js";
import BulletedSummaryInsightUnit from "./BulletedSummaryInsightUnit.js";
import AIScoreInsightUnit from "./AIScoreInsightUnit.js";

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
