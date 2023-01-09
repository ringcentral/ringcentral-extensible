import AggregationResponseOptionsCountersAllCalls from './AggregationResponseOptionsCountersAllCalls';
import AggregationResponseOptionsCountersCallsByDirection from './AggregationResponseOptionsCountersCallsByDirection';
import AggregationResponseOptionsCountersCallsByOrigin from './AggregationResponseOptionsCountersCallsByOrigin';
import AggregationResponseOptionsCountersCallsByResponse from './AggregationResponseOptionsCountersCallsByResponse';
import AggregationResponseOptionsCountersCallsSegments from './AggregationResponseOptionsCountersCallsSegments';
import AggregationResponseOptionsCountersCallsByResult from './AggregationResponseOptionsCountersCallsByResult';
import AggregationResponseOptionsCountersCallsByCompanyHours from './AggregationResponseOptionsCountersCallsByCompanyHours';
import AggregationResponseOptionsCountersCallsByQueueSla from './AggregationResponseOptionsCountersCallsByQueueSla';
import AggregationResponseOptionsCountersCallsByActions from './AggregationResponseOptionsCountersCallsByActions';
import AggregationResponseOptionsCountersCallsByType from './AggregationResponseOptionsCountersCallsByType';
import AggregationResponseOptionsCountersQueueOpportunities from './AggregationResponseOptionsCountersQueueOpportunities';

/**
 * The formula is defined by `aggregationType` and `aggregationInterval` for every counter individually.
 * If `aggregationType` is `Sum` or `Percent`, `aggregationInterval` is not supported.
 * If `aggregationType` is `Min`, `Max` or `Average`, `aggregationInterval` is required
*/
interface AggregationResponseOptionsCounters {
  /**
   * Aggregation of all calls count
   */
  allCalls?: AggregationResponseOptionsCountersAllCalls;

  /**
   * Aggregation of calls count by direction (Inbound, Outbound)
   */
  callsByDirection?: AggregationResponseOptionsCountersCallsByDirection;

  /**
   * Aggregation of calls count by origin (Internal, External)
   */
  callsByOrigin?: AggregationResponseOptionsCountersCallsByOrigin;

  /**
   * Aggregation of calls count by response (Answered, NotAnswered, Connected, NotConnected)
   */
  callsByResponse?: AggregationResponseOptionsCountersCallsByResponse;

  /**
   * Aggregation of calls count by segments (Ringing, LiveTalk, Hold, Park, Transfer, IvrPrompt, Voicemail, VmGreeting, Setup)
   */
  callsSegments?: AggregationResponseOptionsCountersCallsSegments;

  /**
   * Aggregation of calls count by result (Completed, Abandoned, Voicemail, Unknown, Missed, Accepted)
   */
  callsByResult?: AggregationResponseOptionsCountersCallsByResult;

  /**
   * Aggregation of calls count by company hours (BusinessHours, AfterHours)
   */
  callsByCompanyHours?: AggregationResponseOptionsCountersCallsByCompanyHours;

  /**
   * Aggregation of calls count by queue SLA (InSLA, OutSLA). This counter is only applicable to Queues grouping
   */
  callsByQueueSla?: AggregationResponseOptionsCountersCallsByQueueSla;

  /**
   * Aggregation of calls count by action (HoldOff, HoldOn, ParkOn, ParkOff, BlindTransfer, WarmTransfer, DTMFTransfer)
   */
  callsByActions?: AggregationResponseOptionsCountersCallsByActions;

  /**
   * Aggregation of calls count by type (Direct, FromQueue, ParkRetrieval, Transferred, Outbound)
   */
  callsByType?: AggregationResponseOptionsCountersCallsByType;

  /**
   * Aggregation of calls count by the total number of times a Queue call was presented to the user. It is limited to `groupBy` Users and `groupByMembers` (Department, Queue, Site, UserGroup) grouping. Only the listed below options for call filters are applicable to `queueOpportunities` and provide meaningful results: `queues` (selected queue extension ids), `callResults` (Missed, Abandoned), `callResponses` (Answered, NotAnswered), `origins` (Internal, External)
   */
  queueOpportunities?: AggregationResponseOptionsCountersQueueOpportunities;
}

export default AggregationResponseOptionsCounters;
