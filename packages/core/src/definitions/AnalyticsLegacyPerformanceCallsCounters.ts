import AnalyticsLegacyPerformanceCallsTotal from './AnalyticsLegacyPerformanceCallsTotal';
import AnalyticsLegacyPerformanceCallsByDirection from './AnalyticsLegacyPerformanceCallsByDirection';
import AnalyticsLegacyPerformanceCallsByOrigin from './AnalyticsLegacyPerformanceCallsByOrigin';
import AnalyticsLegacyPerformanceCallsByResponse from './AnalyticsLegacyPerformanceCallsByResponse';
import AnalyticsLegacyPerformanceCallsSegments from './AnalyticsLegacyPerformanceCallsSegments';
import AnalyticsLegacyPerformanceCallsByResult from './AnalyticsLegacyPerformanceCallsByResult';
import AnalyticsLegacyPerformanceCallsActions from './AnalyticsLegacyPerformanceCallsActions';
import AnalyticsLegacyPerformanceCallsByCompanyHours from './AnalyticsLegacyPerformanceCallsByCompanyHours';
import AnalyticsLegacyPerformanceCallsByQueueSla from './AnalyticsLegacyPerformanceCallsByQueueSla';
import AnalyticsLegacyPerformanceCallsByType from './AnalyticsLegacyPerformanceCallsByType';

/**
 * Call volume data for the specified grouping
*/
interface AnalyticsLegacyPerformanceCallsCounters {
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
  callsActions?: AnalyticsLegacyPerformanceCallsActions;

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

export default AnalyticsLegacyPerformanceCallsCounters;
