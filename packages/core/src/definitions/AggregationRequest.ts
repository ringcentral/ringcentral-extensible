import type Grouping from "./Grouping.js";
import type TimeSettings from "./TimeSettings.js";
import type CallFilters from "./CallFilters.js";
import type AggregationResponseOptions from "./AggregationResponseOptions.js";

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
