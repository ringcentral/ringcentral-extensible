import type CallFilters from "./CallFilters.js";
import type Grouping from "./Grouping.js";
import type TimelineResponseOptions from "./TimelineResponseOptions.js";
import type TimeSettings from "./TimeSettings.js";

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
