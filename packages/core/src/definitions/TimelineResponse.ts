import ResponsePaging from "./ResponsePaging.js";
import TimelineResponseData from "./TimelineResponseData.js";

interface TimelineResponse {
  /**
   * Required
   */
  paging?: ResponsePaging;

  /**
   * Required
   */
  data?: TimelineResponseData;
}

export default TimelineResponse;
