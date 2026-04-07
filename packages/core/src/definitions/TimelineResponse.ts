import type ResponsePaging from "./ResponsePaging.js";
import type TimelineResponseData from "./TimelineResponseData.js";

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
