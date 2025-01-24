import type ResponsePaging from "./ResponsePaging";
import type TimelineResponseData from "./TimelineResponseData";

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
