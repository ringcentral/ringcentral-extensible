import AllCalls from "./AllCalls.js";
import CallsByDirection from "./CallsByDirection.js";
import CallsByOrigin from "./CallsByOrigin.js";
import CallsByResponse from "./CallsByResponse.js";
import CallsBySegments from "./CallsBySegments.js";
import CallsByResult from "./CallsByResult.js";
import CallsByEndingParty from "./CallsByEndingParty.js";
import CallsByCompanyHours from "./CallsByCompanyHours.js";
import CallsByQueueSla from "./CallsByQueueSla.js";
import CallsByType from "./CallsByType.js";

/**
 * Call length data for the specified grouping
 */
interface CallsTimers {
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
  callsByEndingParty?: CallsByEndingParty;

  /** */
  callsByCompanyHours?: CallsByCompanyHours;

  /** */
  callsByQueueSla?: CallsByQueueSla;

  /** */
  callsByType?: CallsByType;
}

export default CallsTimers;
