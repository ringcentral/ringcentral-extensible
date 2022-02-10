import {
  CallSegmentFilter,
  CallPerformanceActionInfo,
  PerformanceCallsFilterByLength,
  PerformanceCallsFilterTimeSpentByMailbox,
} from './index';

/**
 * Optional filters that limit the scope of calls to be aggregated. Multiple values can be joined via 'AND'
 */
class PerformanceCallsAdditionalFilters {
  /**
   * Specifies whether the call was inbound or outbound relative to the scope specified in grouping object. Not applicable to internal calls with company scope (when grouping is not specified)
   */
  direction?: 'Inbound' | 'Outbound';

  /**
   * Specifies whether an external party was present in the initial segment of the call
   */
  origin?: 'Internal' | 'External';

  /**
   * Aggregation of calls by the first response
   */
  callResponse?: 'Answered' | 'NotAnswered' | 'Connected' | 'NotConnected';

  /**
   * List of call response types. This filter allows to get aggregation of calls based on how the call started from the callee perspective. Multiple values can be joined via 'OR'. If the call is outbound relative to the grouping scope, `callType` is Outbound
   */
  callType?: (
    | 'Direct'
    | 'Outbound'
    | 'ParkRetrieval'
    | 'FromQueue'
    | 'Transferred'
  )[];

  /**
   * Aggregation of calls by the nature of call result. Multiple values can be joined via 'OR'
   */
  callResult?: (
    | 'Completed'
    | 'Abandoned'
    | 'VoiceMail'
    | 'Unknown'
    | 'Missed'
    | 'Accepted'
  )[];

  /**
   * Aggregation of calls by presence of specific segment. Multiple values can be joined via 'OR'
   */
  callSegments?: CallSegmentFilter[];

  /**
   * Aggregation of calls by presence of specific action (joined via OR)
   */
  callActions?: CallPerformanceActionInfo[];

  /**
   * Aggregation of calls by company business hours or after hours.
   */
  companyHours?: 'BusinessHours' | 'AfterHours';

  /**
   */
  callDuration?: PerformanceCallsFilterByLength;

  /**
   */
  timeSpent?: PerformanceCallsFilterTimeSpentByMailbox;

  /**
   * List of extension identifiers from which the users specified in 'groupBy' received calls. Multiple values can be joined via 'OR'
   */
  callerExtensionIds?: string[];

  /**
   * List of extension identifiers to which the users specified in 'groupBy' placed calls. Multiple values can be joined via 'OR'
   */
  calledExtensionIds?: string[];

  /**
   * Direct numbers the caller dialed. Multiple values can be joined via 'OR'
   */
  calledNumbers?: string[];

  /**
   * This filter allows to get aggregation of calls that were either within or out of queue SLA. Only applicable to Queues grouping
   */
  queueSla?: 'InSla' | 'OutSla';
}
export default PerformanceCallsAdditionalFilters;
