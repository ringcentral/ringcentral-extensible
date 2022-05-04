import ResponsePaging from './ResponsePaging';
import PerformanceCallsData from './PerformanceCallsData';

class PerformanceCallsAggregatesResponse {
  /**
   * Required
   */
  paging?: ResponsePaging;

  /**
   * A list of call aggregations as per the grouping and filtering options specified in the request
   */
  data?: PerformanceCallsData[];
}

export default PerformanceCallsAggregatesResponse;
