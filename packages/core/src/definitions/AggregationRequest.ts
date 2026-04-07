import type AggregationResponseOptions from "./AggregationResponseOptions.js";
import type CallFilters from "./CallFilters.js";
import type Grouping from "./Grouping.js";
import type TimeSettings from "./TimeSettings.js";

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
