import type CommStateScheduleRequest from "./CommStateScheduleRequest.js";

interface CommStateScheduleConditionRequest {
  /**
   * State condition type
   * Required
   */
  type?: "Schedule" | "State";

  /**
   * Required
   */
  schedule?: CommStateScheduleRequest;
}

export default CommStateScheduleConditionRequest;
