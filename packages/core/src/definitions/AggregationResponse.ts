import type ResponsePaging from './ResponsePaging';
import type AggregationResponseData from './AggregationResponseData';

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
