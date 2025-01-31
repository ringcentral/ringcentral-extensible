import Grouping from "./Grouping.js";
import TimeSettings from "./TimeSettings.js";
import CallFilters from "./CallFilters.js";
import TimelineResponseOptions from "./TimelineResponseOptions.js";

interface TimelineRequest {
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
  responseOptions?: TimelineResponseOptions;
}

export default TimelineRequest;
