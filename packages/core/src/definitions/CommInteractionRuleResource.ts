import CommInteractionDispatchingResource from "./CommInteractionDispatchingResource.js";

/**
 * Interaction rule
 */
interface CommInteractionRuleResource {
  /**
   * Internal identifier of a rule
   * Required
   * Example: 400133463175
   */
  id?: string;

  /**
   * Required
   */
  conditions?: object[];

  /**
   * Required
   */
  dispatching?: CommInteractionDispatchingResource;

  /**
   * Specifies if a rule is enabled or not. *Work Hours* and *After Hours* rules cannot be disabled
   * Required
   */
  enabled?: boolean;

  /**
   * Custom name of a rule
   * Required
   */
  displayName?: string;
}

export default CommInteractionRuleResource;
