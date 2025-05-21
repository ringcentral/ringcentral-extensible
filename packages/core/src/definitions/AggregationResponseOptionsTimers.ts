import AggregationResponseOptionsTimersAllCallsDuration from "./AggregationResponseOptionsTimersAllCallsDuration.js";
import AggregationResponseOptionsTimersCallsDurationByDirection from "./AggregationResponseOptionsTimersCallsDurationByDirection.js";
import AggregationResponseOptionsTimersCallsDurationByOrigin from "./AggregationResponseOptionsTimersCallsDurationByOrigin.js";
import AggregationResponseOptionsTimersCallsDurationByResponse from "./AggregationResponseOptionsTimersCallsDurationByResponse.js";
import AggregationResponseOptionsTimersCallsSegmentsDuration from "./AggregationResponseOptionsTimersCallsSegmentsDuration.js";
import AggregationResponseOptionsTimersCallsDurationByResult from "./AggregationResponseOptionsTimersCallsDurationByResult.js";
import AggregationResponseOptionsTimersCallsDurationByCompanyHours from "./AggregationResponseOptionsTimersCallsDurationByCompanyHours.js";
import AggregationResponseOptionsTimersCallsDurationByQueueSla from "./AggregationResponseOptionsTimersCallsDurationByQueueSla.js";
import AggregationResponseOptionsTimersCallsDurationByType from "./AggregationResponseOptionsTimersCallsDurationByType.js";
import AggregationResponseOptionsTimersCallsDurationByEndingParty from "./AggregationResponseOptionsTimersCallsDurationByEndingParty.js";

/**
 * The formula is defined by `aggregationType` and `aggregationInterval` for every timer individually.
 * If `aggregationType` is `Sum` or `Percent`, `aggregationInterval` is not supported.
 * If `aggregationType` is `Min`, `Max` or `Average`, `aggregationInterval` is supported, but not required.
 * If left empty, aggregation will be performed on per-call basis
 */
interface AggregationResponseOptionsTimers {
  /**
   * Aggregation of all calls duration
   */
  allCallsDuration?: AggregationResponseOptionsTimersAllCallsDuration;

  /**
   * Aggregation of calls duration by direction (Inbound, Outbound)
   */
  callsDurationByDirection?:
    AggregationResponseOptionsTimersCallsDurationByDirection;

  /**
   * Aggregation of calls duration by origin (Internal, External)
   */
  callsDurationByOrigin?: AggregationResponseOptionsTimersCallsDurationByOrigin;

  /**
   * Aggregation of calls duration by response (Answered, NotAnswered, Connected, NotConnected)
   */
  callsDurationByResponse?:
    AggregationResponseOptionsTimersCallsDurationByResponse;

  /**
   * Aggregation of calls duration by segments (Ringing, LiveTalk, Hold, Park, Transfer, IvrPrompt, Voicemail, VmGreeting, Setup)
   */
  callsSegmentsDuration?: AggregationResponseOptionsTimersCallsSegmentsDuration;

  /**
   * Aggregation of calls duration by result (Completed, Abandoned, Voicemail, Unknown, Missed, Accepted, Transferred, PickedUp, AnsweredElsewhere)
   */
  callsDurationByResult?: AggregationResponseOptionsTimersCallsDurationByResult;

  /**
   * Aggregation of calls duration by company hours (BusinessHours, AfterHours)
   */
  callsDurationByCompanyHours?:
    AggregationResponseOptionsTimersCallsDurationByCompanyHours;

  /**
   * Aggregation of calls duration by queue SLA (InSLA, OutSLA). This timer is only applicable to Queues grouping
   */
  callsDurationByQueueSla?:
    AggregationResponseOptionsTimersCallsDurationByQueueSla;

  /**
   * Aggregation of calls duration by type (Direct, FromQueue, ParkRetrieval, Transferred, Outbound, QueueCallPickup)
   */
  callsDurationByType?: AggregationResponseOptionsTimersCallsDurationByType;

  /**
   * Aggregation of calls duration by party that ended the call (Callee, Caller, System)
   */
  callsDurationByEndingParty?:
    AggregationResponseOptionsTimersCallsDurationByEndingParty;
}

export default AggregationResponseOptionsTimers;
