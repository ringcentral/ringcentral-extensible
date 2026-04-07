import type Grouping from "./Grouping.js";
import type TimeSettings from "./TimeSettings.js";
import type CallFilters from "./CallFilters.js";
import type TimelineResponseOptions from "./TimelineResponseOptions.js";

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
