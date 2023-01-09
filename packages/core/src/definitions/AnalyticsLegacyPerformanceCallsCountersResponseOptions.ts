import AnalyticsLegacyPerformanceCallsCountersResponseOptionsAllCalls from './AnalyticsLegacyPerformanceCallsCountersResponseOptionsAllCalls';
import AnalyticsLegacyPerformanceCallsCountersResponseOptionsCallsByDirection from './AnalyticsLegacyPerformanceCallsCountersResponseOptionsCallsByDirection';
import AnalyticsLegacyPerformanceCallsCountersResponseOptionsCallsByOrigin from './AnalyticsLegacyPerformanceCallsCountersResponseOptionsCallsByOrigin';
import AnalyticsLegacyPerformanceCallsCountersResponseOptionsCallsByResponse from './AnalyticsLegacyPerformanceCallsCountersResponseOptionsCallsByResponse';
import AnalyticsLegacyPerformanceCallsCountersResponseOptionsCallsSegments from './AnalyticsLegacyPerformanceCallsCountersResponseOptionsCallsSegments';
import AnalyticsLegacyPerformanceCallsCountersResponseOptionsCallsByResult from './AnalyticsLegacyPerformanceCallsCountersResponseOptionsCallsByResult';
import AnalyticsLegacyPerformanceCallsCountersResponseOptionsCallsByCompanyHours from './AnalyticsLegacyPerformanceCallsCountersResponseOptionsCallsByCompanyHours';
import AnalyticsLegacyPerformanceCallsCountersResponseOptionsCallsByQueueSla from './AnalyticsLegacyPerformanceCallsCountersResponseOptionsCallsByQueueSla';
import AnalyticsLegacyPerformanceCallsCountersResponseOptionsCallsByActions from './AnalyticsLegacyPerformanceCallsCountersResponseOptionsCallsByActions';
import AnalyticsLegacyPerformanceCallsCountersResponseOptionsCallsByType from './AnalyticsLegacyPerformanceCallsCountersResponseOptionsCallsByType';

/**
 * The formula is defined by `aggregationType` and `aggregationInterval` for every counter individually.
 * If `aggregationType` is `Sum` or `Percent`, `aggregationInterval` is not supported.
 * If `aggregationType` is `Min`, `Max` or `Average`, `aggregationInterval` is required
*/
interface AnalyticsLegacyPerformanceCallsCountersResponseOptions {
  /**
   */
  allCalls?: AnalyticsLegacyPerformanceCallsCountersResponseOptionsAllCalls;

  /**
   */
  callsByDirection?: AnalyticsLegacyPerformanceCallsCountersResponseOptionsCallsByDirection;

  /**
   */
  callsByOrigin?: AnalyticsLegacyPerformanceCallsCountersResponseOptionsCallsByOrigin;

  /**
   */
  callsByResponse?: AnalyticsLegacyPerformanceCallsCountersResponseOptionsCallsByResponse;

  /**
   */
  callsSegments?: AnalyticsLegacyPerformanceCallsCountersResponseOptionsCallsSegments;

  /**
   */
  callsByResult?: AnalyticsLegacyPerformanceCallsCountersResponseOptionsCallsByResult;

  /**
   */
  callsByCompanyHours?: AnalyticsLegacyPerformanceCallsCountersResponseOptionsCallsByCompanyHours;

  /**
   * This counter is only applicable to Queues grouping
   */
  callsByQueueSla?: AnalyticsLegacyPerformanceCallsCountersResponseOptionsCallsByQueueSla;

  /**
   */
  callsByActions?: AnalyticsLegacyPerformanceCallsCountersResponseOptionsCallsByActions;

  /**
   */
  callsByType?: AnalyticsLegacyPerformanceCallsCountersResponseOptionsCallsByType;
}

export default AnalyticsLegacyPerformanceCallsCountersResponseOptions;
