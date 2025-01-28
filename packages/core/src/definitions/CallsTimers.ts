import AllCalls from "./AllCalls";
import CallsByDirection from "./CallsByDirection";
import CallsByOrigin from "./CallsByOrigin";
import CallsByResponse from "./CallsByResponse";
import CallsBySegments from "./CallsBySegments";
import CallsByResult from "./CallsByResult";
import CallsByCompanyHours from "./CallsByCompanyHours";
import CallsByQueueSla from "./CallsByQueueSla";
import CallsByType from "./CallsByType";

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
