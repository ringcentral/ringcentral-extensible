import {PerformanceCallsCounter} from './index';

/**
 * Performance calls counters
 */
class PerformanceCallsCountersResponseOptions {
  /**
   */
  allCalls?: PerformanceCallsCounter;

  /**
   */
  callsByDirection?: PerformanceCallsCounter;

  /**
   */
  callsByOrigin?: PerformanceCallsCounter;

  /**
   */
  callsByResponse?: PerformanceCallsCounter;

  /**
   */
  callsByType?: PerformanceCallsCounter;

  /**
   */
  callsBySegments?: PerformanceCallsCounter;

  /**
   */
  callsByResult?: PerformanceCallsCounter;

  /**
   */
  callsByActions?: PerformanceCallsCounter;

  /**
   */
  callsByCompanyHours?: PerformanceCallsCounter;

  /**
   */
  callsByQueueSla?: PerformanceCallsCounter;
}
export default PerformanceCallsCountersResponseOptions;
