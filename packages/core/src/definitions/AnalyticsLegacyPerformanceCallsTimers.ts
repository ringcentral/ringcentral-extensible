import AnalyticsLegacyPerformanceCallsTotal from './AnalyticsLegacyPerformanceCallsTotal';
import AnalyticsLegacyPerformanceCallsByDirection from './AnalyticsLegacyPerformanceCallsByDirection';
import AnalyticsLegacyPerformanceCallsByOrigin from './AnalyticsLegacyPerformanceCallsByOrigin';
import AnalyticsLegacyPerformanceCallsByResponse from './AnalyticsLegacyPerformanceCallsByResponse';
import AnalyticsLegacyPerformanceCallsSegments from './AnalyticsLegacyPerformanceCallsSegments';
import AnalyticsLegacyPerformanceCallsByResult from './AnalyticsLegacyPerformanceCallsByResult';
import AnalyticsLegacyPerformanceCallsByCompanyHours from './AnalyticsLegacyPerformanceCallsByCompanyHours';
import AnalyticsLegacyPerformanceCallsByQueueSla from './AnalyticsLegacyPerformanceCallsByQueueSla';
import AnalyticsLegacyPerformanceCallsByType from './AnalyticsLegacyPerformanceCallsByType';

/**
 * Call length data for the specified grouping
*/
interface AnalyticsLegacyPerformanceCallsTimers {
  /**
   */
  allCalls?: AnalyticsLegacyPerformanceCallsTotal;

  /**
   */
  callsByDirection?: AnalyticsLegacyPerformanceCallsByDirection;

  /**
   */
  callsByOrigin?: AnalyticsLegacyPerformanceCallsByOrigin;

  /**
   */
  callsByResponse?: AnalyticsLegacyPerformanceCallsByResponse;

  /**
   */
  callsSegments?: AnalyticsLegacyPerformanceCallsSegments;

  /**
   */
  callsByResult?: AnalyticsLegacyPerformanceCallsByResult;

  /**
   */
  callsByCompanyHours?: AnalyticsLegacyPerformanceCallsByCompanyHours;

  /**
   */
  callsByQueueSla?: AnalyticsLegacyPerformanceCallsByQueueSla;

  /**
   */
  callsByType?: AnalyticsLegacyPerformanceCallsByType;
}

export default AnalyticsLegacyPerformanceCallsTimers;
