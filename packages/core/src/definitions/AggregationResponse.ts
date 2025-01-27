import ResponsePaging from "./ResponsePaging.js";
import AggregationResponseData from "./AggregationResponseData.js";

interface AggregationResponse {
  /**
   * Required
   */
  paging?: ResponsePaging;

  /**
   * Required
   */
  data?: AggregationResponseData;
}

export default AggregationResponse;
