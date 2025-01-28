import TranscriptInsightUnit from "./TranscriptInsightUnit";
import SummaryInsightUnit from "./SummaryInsightUnit";
import HighlightsInsightUnit from "./HighlightsInsightUnit";
import NextStepsInsightUnit from "./NextStepsInsightUnit";
import BulletedSummaryInsightUnit from "./BulletedSummaryInsightUnit";
import AIScoreInsightUnit from "./AIScoreInsightUnit";

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
