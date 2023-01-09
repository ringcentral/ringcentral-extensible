import AnalyticsLegacyPerformanceCallsTimersResponseOptionsAllCallsDuration from './AnalyticsLegacyPerformanceCallsTimersResponseOptionsAllCallsDuration';
import AnalyticsLegacyPerformanceCallsTimersResponseOptionsCallsDurationByDirection from './AnalyticsLegacyPerformanceCallsTimersResponseOptionsCallsDurationByDirection';
import AnalyticsLegacyPerformanceCallsTimersResponseOptionsCallsDurationByOrigin from './AnalyticsLegacyPerformanceCallsTimersResponseOptionsCallsDurationByOrigin';
import AnalyticsLegacyPerformanceCallsTimersResponseOptionsCallsDurationByResponse from './AnalyticsLegacyPerformanceCallsTimersResponseOptionsCallsDurationByResponse';
import AnalyticsLegacyPerformanceCallsTimersResponseOptionsCallsSegmentsDuration from './AnalyticsLegacyPerformanceCallsTimersResponseOptionsCallsSegmentsDuration';
import AnalyticsLegacyPerformanceCallsTimersResponseOptionsCallsDurationByResult from './AnalyticsLegacyPerformanceCallsTimersResponseOptionsCallsDurationByResult';
import AnalyticsLegacyPerformanceCallsTimersResponseOptionsCallsDurationByCompanyHours from './AnalyticsLegacyPerformanceCallsTimersResponseOptionsCallsDurationByCompanyHours';
import AnalyticsLegacyPerformanceCallsTimersResponseOptionsCallsDurationByQueueSla from './AnalyticsLegacyPerformanceCallsTimersResponseOptionsCallsDurationByQueueSla';
import AnalyticsLegacyPerformanceCallsTimersResponseOptionsCallsDurationByType from './AnalyticsLegacyPerformanceCallsTimersResponseOptionsCallsDurationByType';

/**
 * The formula is defined by `aggregationType` and `aggregationInterval` for every timer individually.
 * If `aggregationType` is `Sum` or `Percent`, `aggregationInterval` is not supported.
 * If `aggregationType` is `Min`, `Max` or `Average`, `aggregationInterval` is supported, but not required.
 * If left empty, aggregation will be performed on per-call basis
*/
interface AnalyticsLegacyPerformanceCallsTimersResponseOptions {
  /**
   */
  allCallsDuration?: AnalyticsLegacyPerformanceCallsTimersResponseOptionsAllCallsDuration;

  /**
   */
  callsDurationByDirection?: AnalyticsLegacyPerformanceCallsTimersResponseOptionsCallsDurationByDirection;

  /**
   */
  callsDurationByOrigin?: AnalyticsLegacyPerformanceCallsTimersResponseOptionsCallsDurationByOrigin;

  /**
   */
  callsDurationByResponse?: AnalyticsLegacyPerformanceCallsTimersResponseOptionsCallsDurationByResponse;

  /**
   */
  callsSegmentsDuration?: AnalyticsLegacyPerformanceCallsTimersResponseOptionsCallsSegmentsDuration;

  /**
   */
  callsDurationByResult?: AnalyticsLegacyPerformanceCallsTimersResponseOptionsCallsDurationByResult;

  /**
   */
  callsDurationByCompanyHours?: AnalyticsLegacyPerformanceCallsTimersResponseOptionsCallsDurationByCompanyHours;

  /**
   * This timer is only applicable to Queues grouping
   */
  callsDurationByQueueSla?: AnalyticsLegacyPerformanceCallsTimersResponseOptionsCallsDurationByQueueSla;

  /**
   */
  callsDurationByType?: AnalyticsLegacyPerformanceCallsTimersResponseOptionsCallsDurationByType;
}

export default AnalyticsLegacyPerformanceCallsTimersResponseOptions;
