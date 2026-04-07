import CommStateScheduleResource from "./CommStateScheduleResource.js";

interface CommStateScheduleConditionResource {
  /**
   * State condition type
   * Required
   */
  type?: "Schedule" | "State";

  /**
   * Required
   */
  schedule?: CommStateScheduleResource;
}

export default CommStateScheduleConditionResource;
