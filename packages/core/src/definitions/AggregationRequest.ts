import type Grouping from './Grouping';
import type TimeSettings from './TimeSettings';
import type CallFilters from './CallFilters';
import type AggregationResponseOptions from './AggregationResponseOptions';

interface AggregationRequest {
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
  responseOptions?: AggregationResponseOptions;
}

export default AggregationRequest;
