import PerformanceCallsGrouping from './PerformanceCallsGrouping';
import PerformanceCallsTimeSettings from './PerformanceCallsTimeSettings';
import PerformanceCallsFilters from './PerformanceCallsFilters';
import TimelineResponseDataOptions from './TimelineResponseDataOptions';

interface PerformanceCallsTimelineRequest {
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
