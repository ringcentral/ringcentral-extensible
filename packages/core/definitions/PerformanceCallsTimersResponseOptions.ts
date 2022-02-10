import {PerformanceCallsTimer} from './index';

/**
 * Performance calls timers. 'callsDurationByQueueSla' timer is only applicable to Queues grouping
 */
class PerformanceCallsTimersResponseOptions {
  /**
   */
  allCallsDuration?: PerformanceCallsTimer;

  /**
   */
  callsSegmentsDuration?: PerformanceCallsTimer;

  /**
   */
  callsDurationByDirection?: PerformanceCallsTimer;

  /**
   */
  callsDurationByOrigin?: PerformanceCallsTimer;

  /**
   */
  callsDurationByResponse?: PerformanceCallsTimer;

  /**
   */
  callsDurationByType?: PerformanceCallsTimer;

  /**
   */
  callsDurationByResult?: PerformanceCallsTimer;

  /**
   */
  callsDurationByCompanyHours?: PerformanceCallsTimer;

  /**
   */
  callsDurationByQueueSla?: PerformanceCallsTimer;
}
export default PerformanceCallsTimersResponseOptions;
