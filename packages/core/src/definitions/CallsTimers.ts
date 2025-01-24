import type AllCalls from "./AllCalls";
import type CallsByDirection from "./CallsByDirection";
import type CallsByOrigin from "./CallsByOrigin";
import type CallsByResponse from "./CallsByResponse";
import type CallsBySegments from "./CallsBySegments";
import type CallsByResult from "./CallsByResult";
import type CallsByCompanyHours from "./CallsByCompanyHours";
import type CallsByQueueSla from "./CallsByQueueSla";
import type CallsByType from "./CallsByType";

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
  callsByCompanyHours?: CallsByCompanyHours;

  /** */
  callsByQueueSla?: CallsByQueueSla;

  /** */
  callsByType?: CallsByType;
}

export default CallsTimers;
