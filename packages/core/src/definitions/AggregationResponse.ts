import type AggregationResponseData from "./AggregationResponseData.js";
import type ResponsePaging from "./ResponsePaging.js";

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
