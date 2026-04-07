import CommStateDispatchingResourceActions from "./CommStateDispatchingResourceActions.js";

interface CommStateDispatchingResource {
  /**
   * Action information
   * Required
   */
  actions?: CommStateDispatchingResourceActions[];

  /**
   * Call dispatching type
   * Required
   */
  type?: "RingAtOnce" | "RingInOrder" | "Custom" | "Terminate";
}

export default CommStateDispatchingResource;
