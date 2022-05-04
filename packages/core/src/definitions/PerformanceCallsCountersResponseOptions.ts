import {
  PerformanceCallsCountersResponseOptionsAllCalls, PerformanceCallsCountersResponseOptionsCallsByDirection, PerformanceCallsCountersResponseOptionsCallsByOrigin, PerformanceCallsCountersResponseOptionsCallsByResponse, PerformanceCallsCountersResponseOptionsCallsSegments, PerformanceCallsCountersResponseOptionsCallsByResult, PerformanceCallsCountersResponseOptionsCallsByCompanyHours, PerformanceCallsCountersResponseOptionsCallsByQueueSla, PerformanceCallsCountersResponseOptionsCallsByActions, PerformanceCallsCountersResponseOptionsCallsByType,
} from './index';

/**
 * The formula is defined by `aggregationType` and `aggregationInterval` for every counter individually.
 * If `aggregationType` is `Sum` or `Percent`, `aggregationInterval` is not supported.
 * If `aggregationType` is `Min`, `Max` or `Average`, `aggregationInterval` is required
*/
class PerformanceCallsCountersResponseOptions {
  /**
   */
  allCalls?: PerformanceCallsCountersResponseOptionsAllCalls;

  /**
   */
  callsByDirection?: PerformanceCallsCountersResponseOptionsCallsByDirection;

  /**
   */
  callsByOrigin?: PerformanceCallsCountersResponseOptionsCallsByOrigin;

  /**
   */
  callsByResponse?: PerformanceCallsCountersResponseOptionsCallsByResponse;

  /**
   */
  callsSegments?: PerformanceCallsCountersResponseOptionsCallsSegments;

  /**
   */
  callsByResult?: PerformanceCallsCountersResponseOptionsCallsByResult;

  /**
   */
  callsByCompanyHours?: PerformanceCallsCountersResponseOptionsCallsByCompanyHours;

  /**
   * This counter is only applicable to Queues grouping
   */
  callsByQueueSla?: PerformanceCallsCountersResponseOptionsCallsByQueueSla;

  /**
   */
  callsByActions?: PerformanceCallsCountersResponseOptionsCallsByActions;

  /**
   */
  callsByType?: PerformanceCallsCountersResponseOptionsCallsByType;
}
export default PerformanceCallsCountersResponseOptions;
