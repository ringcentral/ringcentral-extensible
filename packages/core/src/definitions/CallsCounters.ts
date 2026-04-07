import type AllCalls from "./AllCalls.js";
import type CallsByActions from "./CallsByActions.js";
import type CallsByCompanyHours from "./CallsByCompanyHours.js";
import type CallsByDirection from "./CallsByDirection.js";
import type CallsByEndingParty from "./CallsByEndingParty.js";
import type CallsByOrigin from "./CallsByOrigin.js";
import type CallsByQueueHours from "./CallsByQueueHours.js";
import type CallsByQueueSla from "./CallsByQueueSla.js";
import type CallsByResponse from "./CallsByResponse.js";
import type CallsByResult from "./CallsByResult.js";
import type CallsBySegments from "./CallsBySegments.js";
import type CallsByType from "./CallsByType.js";
import type QueueOpportunities from "./QueueOpportunities.js";

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
  callsByEndingParty?: CallsByEndingParty;

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

  /**
   */
  callsByQueueHours?: CallsByQueueHours;
}

export default CallsCounters;
