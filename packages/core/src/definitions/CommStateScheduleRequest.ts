import type CommStateScheduleRequestTriggers from "./CommStateScheduleRequestTriggers.js";

interface CommStateScheduleRequest {
  /**
   * Required
   */
  triggers?: CommStateScheduleRequestTriggers[];
}

export default CommStateScheduleRequest;
