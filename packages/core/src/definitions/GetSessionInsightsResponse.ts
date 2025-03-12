import RecordingInsights from "./RecordingInsights.js";
import RSPagingModel from "./RSPagingModel.js";

interface GetSessionInsightsResponse {
  /**
   * Required
   */
  records?: RecordingInsights[];

  /**
   * Required
   */
  paging?: RSPagingModel;
}

export default GetSessionInsightsResponse;
