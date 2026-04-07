import CommStateReferenceResource from "./CommStateReferenceResource.js";

interface CommStateRefConditionResource {
  /**
   * State condition type
   * Required
   */
  type?: "Schedule" | "State";

  /**
   */
  state?: CommStateReferenceResource;
}

export default CommStateRefConditionResource;
