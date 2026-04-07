import type RecordingInsights from "./RecordingInsights.js";
import type RSPagingModel from "./RSPagingModel.js";

interface SessionsInsightsResource {
  /**
   * Required
   */
  records?: RecordingInsights[];

  /**
   * Required
   */
  paging?: RSPagingModel;
}

export default SessionsInsightsResource;
