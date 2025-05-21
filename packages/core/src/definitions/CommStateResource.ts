interface CommStateResource {
  /**
   * Id/Type of a state the rule is based on
   * Required
   */
  id?: "after-hours" | "work-hours" | "dnd" | "forward-all-calls" | "agent";

  /**
   * Specifies if a state is enabled or not. *Work Hours* and *After Hours* states cannot be disabled
   * Required
   */
  enabled?: boolean;

  /**
   * Predefined name of a state-based rule (similar to the name of a state)
   * Required
   */
  displayName?:
    | "After Hours"
    | "Work Hours"
    | "Do not disturb"
    | "Forward all calls"
    | "Agent";

  /**
   * Required
   */
  conditions?: object[];
}

export default CommStateResource;
