import RecordingInsights from "./RecordingInsights.js";
import RSPagingModel from "./RSPagingModel.js";

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
