import type CommStateDispatchingResource from "./CommStateDispatchingResource.js";

interface CommStateDispatchingRefResource {
  /**
   * Id/Type of a state the rule is based on
   * Required
   */
  ruleId?:
    | "after-hours"
    | "work-hours"
    | "dnd"
    | "forward-all-calls"
    | "agent"
    | "busy";

  /**
   */
  dispatching?: CommStateDispatchingResource;
}

export default CommStateDispatchingRefResource;
