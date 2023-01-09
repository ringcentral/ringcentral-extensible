import ResponsePaging from './ResponsePaging';
import AggregationResponseData from './AggregationResponseData';

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
