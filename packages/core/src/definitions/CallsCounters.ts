import type AllCalls from './AllCalls';
import type CallsByDirection from './CallsByDirection';
import type CallsByOrigin from './CallsByOrigin';
import type CallsByResponse from './CallsByResponse';
import type CallsBySegments from './CallsBySegments';
import type CallsByResult from './CallsByResult';
import type CallsByActions from './CallsByActions';
import type CallsByCompanyHours from './CallsByCompanyHours';
import type CallsByQueueSla from './CallsByQueueSla';
import type CallsByType from './CallsByType';
import type QueueOpportunities from './QueueOpportunities';

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
