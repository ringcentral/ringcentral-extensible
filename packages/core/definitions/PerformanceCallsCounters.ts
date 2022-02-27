import {
  PerformanceCallsTotal,
  PerformanceCallsByDirection,
  PerformanceCallsByOrigin,
  PerformanceCallsByResponse,
  PerformanceCallsSegments,
  PerformanceCallsByResult,
  PerformanceCallsActions,
  PerformanceCallsByCompanyHours,
  PerformanceCallsByQueueSla,
  PerformanceCallsByType,
} from './index';

/**
 * Call volume data for the specified grouping
 */
class PerformanceCallsCounters {
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
  callsActions?: PerformanceCallsActions;

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
export default PerformanceCallsCounters;
