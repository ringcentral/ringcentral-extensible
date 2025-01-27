import ExtensionFilters from "./ExtensionFilters.js";
import CallSegmentFilter from "./CallSegmentFilter.js";
import CallDurationFilter from "./CallDurationFilter.js";
import TimeSpentFilter from "./TimeSpentFilter.js";

/**
 * Optional filters that limit the scope of calls (joined via AND)
 */
interface CallFilters {
  /** */
  extensionFilters?: ExtensionFilters;

  /**
   * List of queues extension ids which allows to get data only for calls that were routed through any of these queues
   */
  queues?: string[];

  /**
   * The direct company numbers the caller called (joined via OR)
   */
  calledNumbers?: string[];

  /**
   * Specifies the call directions relative to the scope specified in grouping object (joined via OR). Not applicable to internal origin calls with company scope
   */
  directions?: ("Inbound" | "Outbound")[];

  /**
   * Specifies whether an external party was present in the initial segment of the call (joined via OR)
   */
  origins?: ("Internal" | "External")[];

  /**
   * Filtering of calls by first response (joined via OR)
   */
  callResponses?: ("Answered" | "NotAnswered" | "Connected" | "NotConnected")[];

  /**
   * Filtering of calls by the nature of call result (joined via OR)
   */
  callResults?: (
    | "Completed"
    | "Abandoned"
    | "Voicemail"
    | "Unknown"
    | "Missed"
    | "Accepted"
  )[];

  /**
   * Filtering of calls by presence of specific segment (joined via OR)
   */
  callSegments?: CallSegmentFilter[];

  /**
   * Filtering of calls by presence of specific action (joined via OR)
   */
  callActions?: (
    | "HoldOff"
    | "HoldOn"
    | "ParkOn"
    | "ParkOff"
    | "BlindTransfer"
    | "WarmTransfer"
    | "DTMFTransfer"
  )[];

  /**
   * Filtering of calls by company's business hours or after hours (joined via OR)
   */
  companyHours?: ("BusinessHours" | "AfterHours")[];

  /** */
  callDuration?: CallDurationFilter;

  /** */
  timeSpent?: TimeSpentFilter;

  /**
   * Filtering calls that were within or out of queue SLA (joined via OR). Only applicable to Queues grouping
   */
  queueSla?: ("InSla" | "OutSla")[];

  /**
   * Filtering of calls based on how the call started from the callee perspective (joined via OR). If the call is outbound relative to the grouping scope, CallType is Outbound
   */
  callTypes?: (
    | "Direct"
    | "FromQueue"
    | "ParkRetrieval"
    | "Transferred"
    | "Outbound"
    | "Overflow"
  )[];
}

export default CallFilters;
