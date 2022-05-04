import {
  PerformanceCallsGrouping, PerformanceCallsTimeSettings, PerformanceCallsFilters, TimelineResponseDataOptions,
} from './index';

class PerformanceCallsTimelineRequest {
  /**
   */
  grouping?: PerformanceCallsGrouping;

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
