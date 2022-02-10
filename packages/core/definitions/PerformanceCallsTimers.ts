import {
  PerformanceCallsTotal,
  PerformanceCallsByDirection,
  PerformanceCallsByOrigin,
  PerformanceCallsByResponse,
  PerformanceCallsSegments,
  PerformanceCallsByResult,
  PerformanceCallsByCompanyHours,
  PerformanceCallsByQueueSla,
  PerformanceCallsByType,
} from './index';

/**
 * Call length data for the specified grouping.
 */
class PerformanceCallsTimers {
  /**
   */
  allCalls?: PerformanceCallsTotal;

  /**
   */
  callsByDirection?: PerformanceCallsByDirection;

  /**
   */
  callsByOrigin?: PerformanceCallsByOrigin;

  /**
   */
  callsByResponse?: PerformanceCallsByResponse;

  /**
   */
  callsSegments?: PerformanceCallsSegments;

  /**
   */
  callsByResult?: PerformanceCallsByResult;

  /**
   */
  callsByCompanyHours?: PerformanceCallsByCompanyHours;

  /**
   */
  callsByQueueSla?: PerformanceCallsByQueueSla;

  /**
   */
  callsByType?: PerformanceCallsByType;
}
export default PerformanceCallsTimers;
