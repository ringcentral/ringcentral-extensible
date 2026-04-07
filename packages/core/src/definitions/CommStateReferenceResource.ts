import type CommStateScheduleConditionResource from "./CommStateScheduleConditionResource.js";

interface CommStateReferenceResource {
  /**
   * Id/Type of a state the rule is based on
   * Required
   */
  id?:
    | "after-hours"
    | "work-hours"
    | "dnd"
    | "forward-all-calls"
    | "agent"
    | "busy";

  /**
   * Predefined name of a state-based rule (similar to the name of a state)
   * Required
   */
  displayName?:
    | "After Hours"
    | "Work Hours"
    | "Do not disturb"
    | "Forward all calls"
    | "Agent"
    | "Busy";

  /**
   * Required
   */
  conditions?: CommStateScheduleConditionResource[];
}

export default CommStateReferenceResource;
