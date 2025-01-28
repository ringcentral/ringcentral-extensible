import Grouping from "./Grouping";
import TimeSettings from "./TimeSettings";
import CallFilters from "./CallFilters";
import AggregationResponseOptions from "./AggregationResponseOptions";

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
