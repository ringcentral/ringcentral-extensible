import CommStateScheduleResource from "./CommStateScheduleResource.js";

interface CommStateScheduleConditionRequest {
  /**
   * Ring target type
   * Required
   */
  type?: "Schedule" | "State";

  /**
   * Required
   */
  schedule?: CommStateScheduleResource;
}

export default CommStateScheduleConditionRequest;
