/**
 * Options for selecting breakdown for calls duration
 */
interface TimelineResponseOptionsTimers {
  /**
   * Include data for all calls duration
   */
  allCallsDuration?: boolean;

  /**
   * Include breakdown of calls duration by direction (Inbound, Outbound)
   */
  callsDurationByDirection?: boolean;

  /**
   * Include breakdown of calls duration by origin (Internal, External)
   */
  callsDurationByOrigin?: boolean;

  /**
   * Include breakdown of calls duration by response (Answered, NotAnswered, Connected, NotConnected)
   */
  callsDurationByResponse?: boolean;

  /**
   * Include breakdown of calls duration by segments (Ringing, LiveTalk, Hold, Park, Transfer, IvrPrompt, Voicemail, VmGreeting, Setup)
   */
  callsSegmentsDuration?: boolean;

  /**
   * Include breakdown of calls duration by result (Completed, Abandoned, Voicemail, Unknown, Missed, Accepted)
   */
  callsDurationByResult?: boolean;

  /**
   * Include breakdown of calls duration by party that ended the call (Caller, Callee, System)
   */
  callsDurationByEndingParty?: boolean;

  /**
   * Include breakdown of calls duration by company hours (BusinessHours, AfterHours)
   */
  callsDurationByCompanyHours?: boolean;

  /**
   * Include breakdown of calls duration by queue SLA (InSLA, OutSLA). This timer is only applicable to Queues grouping
   */
  callsDurationByQueueSla?: boolean;

  /**
   * Include breakdown of calls duration by type (Direct, FromQueue, ParkRetrieval, Transferred, Outbound)
   */
  callsDurationByType?: boolean;
}

export default TimelineResponseOptionsTimers;
