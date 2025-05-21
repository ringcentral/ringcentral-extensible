import CommStateScheduleResource from "./CommStateScheduleResource.js";

interface CommStateScheduleConditionResource {
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

export default CommStateScheduleConditionResource;
