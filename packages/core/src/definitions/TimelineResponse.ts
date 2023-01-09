import ResponsePaging from './ResponsePaging';
import TimelineResponseData from './TimelineResponseData';

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
