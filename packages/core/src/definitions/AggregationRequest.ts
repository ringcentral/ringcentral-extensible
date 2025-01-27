import Grouping from "./Grouping.js";
import TimeSettings from "./TimeSettings.js";
import CallFilters from "./CallFilters.js";
import AggregationResponseOptions from "./AggregationResponseOptions.js";

interface AggregationRequest {
  /**
   * Required
   */
  grouping?: Grouping;

  /**
   * Required
   */
  timeSettings?: TimeSettings;

  /** */
  callFilters?: CallFilters;

  /**
   * Required
   */
  responseOptions?: AggregationResponseOptions;
}

export default AggregationRequest;
