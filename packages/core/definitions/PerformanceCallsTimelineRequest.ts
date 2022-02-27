import {
  TimelinePerformanceCallsGrouping,
  PerformanceCallsTimeSettings,
  PerformanceCallsFilters,
  TimelineResponseDataOptions,
} from './index';

class PerformanceCallsTimelineRequest {
  /**
   * Required
   */
  grouping?: TimelinePerformanceCallsGrouping;

  /**
   * Required
   */
  timeSettings?: PerformanceCallsTimeSettings;

  /**
   */
  additionalFilters?: PerformanceCallsFilters;

  /**
   * Required
   */
  responseOptions?: TimelineResponseDataOptions;
}
export default PerformanceCallsTimelineRequest;
