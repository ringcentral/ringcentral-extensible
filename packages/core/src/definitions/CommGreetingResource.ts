import CommGreetingIdResource from "./CommGreetingIdResource.js";

interface CommGreetingResource {
  /**
   * Greeting type
   * Required
   */
  effectiveGreetingType?: "Custom" | "Preset";

  /**
   * Required
   */
  preset?: CommGreetingIdResource;

  /** */
  custom?: CommGreetingIdResource;
}

export default CommGreetingResource;
