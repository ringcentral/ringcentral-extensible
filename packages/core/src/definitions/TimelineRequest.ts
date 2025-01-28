import Grouping from "./Grouping";
import TimeSettings from "./TimeSettings";
import CallFilters from "./CallFilters";
import TimelineResponseOptions from "./TimelineResponseOptions";

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
