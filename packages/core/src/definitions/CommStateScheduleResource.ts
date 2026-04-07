import type CommStateScheduleResourceTriggers from "./CommStateScheduleResourceTriggers.js";

interface CommStateScheduleResource {
  /**
   * Required
   */
  triggers?: CommStateScheduleResourceTriggers[];
}

export default CommStateScheduleResource;
