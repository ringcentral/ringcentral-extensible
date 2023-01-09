import AllCalls from './AllCalls';
import CallsByDirection from './CallsByDirection';
import CallsByOrigin from './CallsByOrigin';
import CallsByResponse from './CallsByResponse';
import CallsBySegments from './CallsBySegments';
import CallsByResult from './CallsByResult';
import CallsByActions from './CallsByActions';
import CallsByCompanyHours from './CallsByCompanyHours';
import CallsByQueueSla from './CallsByQueueSla';
import CallsByType from './CallsByType';
import QueueOpportunities from './QueueOpportunities';

/**
 * Call volume data for the specified grouping
*/
interface CallsCounters {
  /**
   */
  allCalls?: AllCalls;

  /**
   */
  callsByDirection?: CallsByDirection;

  /**
   */
  callsByOrigin?: CallsByOrigin;

  /**
   */
  callsByResponse?: CallsByResponse;

  /**
   */
  callsSegments?: CallsBySegments;

  /**
   */
  callsByResult?: CallsByResult;

  /**
   */
  callsActions?: CallsByActions;

  /**
   */
  callsByCompanyHours?: CallsByCompanyHours;

  /**
   */
  callsByQueueSla?: CallsByQueueSla;

  /**
   */
  callsByType?: CallsByType;

  /**
   */
  queueOpportunities?: QueueOpportunities;
}

export default CallsCounters;
