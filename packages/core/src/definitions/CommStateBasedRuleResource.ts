import CommStateDispatchingResource from "./CommStateDispatchingResource.js";
import CommStateDispatchingRefResource from "./CommStateDispatchingRefResource.js";
import CommStateResource from "./CommStateResource.js";

/**
 * State-based rule information
 */
interface CommStateBasedRuleResource {
  /**
   * Id/Type of a state the rule is based on
   * Required
   */
  id?: "after-hours" | "work-hours" | "dnd" | "forward-all-calls" | "agent";

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
  dispatching?: CommStateDispatchingResource;

  /** */
  dispatchingRef?: CommStateDispatchingRefResource;

  /**
   * Required
   */
  state?: CommStateResource;
}

export default CommStateBasedRuleResource;
