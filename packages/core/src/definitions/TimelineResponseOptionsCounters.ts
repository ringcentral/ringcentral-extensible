/**
 * Options for selecting breakdown for calls count
*/
interface TimelineResponseOptionsCounters {
  /**
   * Include data for total calls count
   */
  allCalls?: boolean;

  /**
   * Include breakdown of calls count by direction (Inbound, Outbound)
   */
  callsByDirection?: boolean;

  /**
   * Include breakdown of calls count by origin (Internal, External)
   */
  callsByOrigin?: boolean;

  /**
   * Include breakdown of calls count by response (Answered, NotAnswered, Connected, NotConnected)
   */
  callsByResponse?: boolean;

  /**
   * Include breakdown of calls count by segments (Ringing, LiveTalk, Hold, Park, Transfer, IvrPrompt, Voicemail, VmGreeting, Setup)
   */
  callsSegments?: boolean;

  /**
   * Include breakdown of calls count by result (Completed, Abandoned, Voicemail, Unknown, Missed, Accepted)
   */
  callsByResult?: boolean;

  /**
   * Include breakdown of calls count by company hours (BusinessHours, AfterHours)
   */
  callsByCompanyHours?: boolean;

  /**
   * Include breakdown of calls count by queue SLA (InSLA, OutSLA). This counter is only applicable to Queues grouping
   */
  callsByQueueSla?: boolean;

  /**
   * Include breakdown of calls count by action (HoldOff, HoldOn, ParkOn, ParkOff, BlindTransfer, WarmTransfer, DTMFTransfer)
   */
  callsByActions?: boolean;

  /**
   * Include breakdown of calls count by type (Direct, FromQueue, ParkRetrieval, Transferred, Outbound)
   */
  callsByType?: boolean;

  /**
   * Include breakdown of calls count by the total number of times a Queue call was presented to the user. It is limited to `groupBy` Users and `groupByMembers` (Department, Queue, Site, UserGroup) grouping. Only the listed below options for call filters are applicable to `queueOpportunities` and provide meaningful results: `queues` (selected queue extension ids), `callResults` (Missed, Abandoned), `callResponses` (Answered, NotAnswered), `origins` (Internal, External)
   */
  queueOpportunities?: boolean;
}

export default TimelineResponseOptionsCounters;
