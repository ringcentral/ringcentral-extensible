import CommReferenceStateResource from "./CommReferenceStateResource.js";

interface CommStateRefConditionRequest {
  /**
   * Ring target type
   * Required
   */
  type?: "Schedule" | "State";

  /**
   * Required
   */
  state?: CommReferenceStateResource;
}

export default CommStateRefConditionRequest;
