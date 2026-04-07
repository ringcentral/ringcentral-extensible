import type ResponsePaging from "./ResponsePaging.js";
import type AggregationResponseData from "./AggregationResponseData.js";

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
