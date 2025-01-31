import AllCalls from "./AllCalls.js";
import CallsByDirection from "./CallsByDirection.js";
import CallsByOrigin from "./CallsByOrigin.js";
import CallsByResponse from "./CallsByResponse.js";
import CallsBySegments from "./CallsBySegments.js";
import CallsByResult from "./CallsByResult.js";
import CallsByActions from "./CallsByActions.js";
import CallsByCompanyHours from "./CallsByCompanyHours.js";
import CallsByQueueSla from "./CallsByQueueSla.js";
import CallsByType from "./CallsByType.js";
import QueueOpportunities from "./QueueOpportunities.js";

/**
 * Call volume data for the specified grouping
 */
interface CallsCounters {
  /** */
  allCalls?: AllCalls;

  /** */
  callsByDirection?: CallsByDirection;

  /** */
  callsByOrigin?: CallsByOrigin;

  /** */
  callsByResponse?: CallsByResponse;

  /** */
  callsSegments?: CallsBySegments;

  /** */
  callsByResult?: CallsByResult;

  /** */
  callsActions?: CallsByActions;

  /** */
  callsByCompanyHours?: CallsByCompanyHours;

  /** */
  callsByQueueSla?: CallsByQueueSla;

  /** */
  callsByType?: CallsByType;

  /** */
  queueOpportunities?: QueueOpportunities;
}

export default CallsCounters;
