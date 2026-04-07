import type CommCallTypesResource from "./CommCallTypesResource.js";
import type CommInteractionDispatchingResourceActions from "./CommInteractionDispatchingResourceActions.js";

interface CommInteractionDispatchingResource {
  /**
   */
  callTypes?: CommCallTypesResource;

  /**
   * Action information
   * Required
   */
  actions?: CommInteractionDispatchingResourceActions[];

  /**
   * Call dispatching type
   * Required
   */
  type?: "RingAtOnce" | "RingInOrder" | "Custom" | "Terminate";
}

export default CommInteractionDispatchingResource;
