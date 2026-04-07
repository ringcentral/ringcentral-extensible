import CommDispatchingRequest from "./CommDispatchingRequest.js";

/**
 * Interaction rule create request
 */
interface CommInteractionRuleCreateRequest {
  /**
   * Required
   */
  conditions?: object[];

  /**
   * Required
   */
  dispatching?: CommDispatchingRequest;

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

export default CommInteractionRuleCreateRequest;
