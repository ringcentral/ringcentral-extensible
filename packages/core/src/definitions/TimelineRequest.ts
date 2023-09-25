import type Grouping from './Grouping';
import type TimeSettings from './TimeSettings';
import type CallFilters from './CallFilters';
import type TimelineResponseOptions from './TimelineResponseOptions';

interface TimelineRequest {
  /**
   * Required
   */
  grouping?: Grouping;

  /**
   * Required
   */
  timeSettings?: TimeSettings;

  /**
   */
  callFilters?: CallFilters;

  /**
   * Required
   */
  responseOptions?: TimelineResponseOptions;
}

export default TimelineRequest;
