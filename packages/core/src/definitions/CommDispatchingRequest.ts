import type CommCallTypesResource from "./CommCallTypesResource.js";
import type CommDispatchingRequestActions from "./CommDispatchingRequestActions.js";

interface CommDispatchingRequest {
  /**
   */
  callTypes?: CommCallTypesResource;

  /**
   * Action information
   * Required
   */
  actions?: CommDispatchingRequestActions[];

  /**
   * Call dispatching type
   * Required
   */
  type?: "RingAtOnce" | "RingInOrder" | "Custom" | "Terminate";
}

export default CommDispatchingRequest;
