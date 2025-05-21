import CommDispatchingRequest from "./CommDispatchingRequest.js";

/**
 * Interaction rule update request
 */
interface CommInteractionRuleUpdateRequest {
  /** */
  conditions?: object[];

  /** */
  dispatching?: CommDispatchingRequest;

  /**
   * Specifies if a rule is enabled or not. *Work Hours* and *After Hours* rules cannot be disabled
   */
  enabled?: boolean;

  /**
   * Custom name of a rule
   */
  displayName?: string;
}

export default CommInteractionRuleUpdateRequest;
