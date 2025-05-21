import CommStateReferenceResource from "./CommStateReferenceResource.js";

interface CommStateRefConditionResource {
  /**
   * Ring target type
   * Required
   */
  type?: "Schedule" | "State";

  /** */
  state?: CommStateReferenceResource;
}

export default CommStateRefConditionResource;
