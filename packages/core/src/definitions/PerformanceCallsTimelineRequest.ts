import PerformanceCallsGrouping from './PerformanceCallsGrouping';
import PerformanceCallsTimeSettings from './PerformanceCallsTimeSettings';
import PerformanceCallsFilters from './PerformanceCallsFilters';
import TimelineResponseDataOptions from './TimelineResponseDataOptions';

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
