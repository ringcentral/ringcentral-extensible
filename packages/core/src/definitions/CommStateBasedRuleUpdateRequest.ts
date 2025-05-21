import CommDispatchingRequest from "./CommDispatchingRequest.js";

/**
 * State-based rule update request
 */
interface CommStateBasedRuleUpdateRequest {
  /** */
  dispatching?: CommDispatchingRequest;
}

export default CommStateBasedRuleUpdateRequest;
