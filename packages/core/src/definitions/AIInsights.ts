import TranscriptInsightUnit from "./TranscriptInsightUnit.js";
import SummaryInsightUnit from "./SummaryInsightUnit.js";
import HighlightsInsightUnit from "./HighlightsInsightUnit.js";
import NextStepsInsightUnit from "./NextStepsInsightUnit.js";
import BulletedSummaryInsightUnit from "./BulletedSummaryInsightUnit.js";
import AIScoreInsightUnit from "./AIScoreInsightUnit.js";
import CallNotesInsightUnit from "./CallNotesInsightUnit.js";

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

  /** */
  CallNotes?: CallNotesInsightUnit[];
}

export default AIInsights;
