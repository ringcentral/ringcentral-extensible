import CommIntegrationResource from "./CommIntegrationResource.js";

interface CommIntegrationTargetResource {
  /**
   * Required
   */
  integration?: CommIntegrationResource;

  /**
   * Ring target type
   * Example: IntegrationRingTarget
   */
  type?: "IntegrationRingTarget";
}

export default CommIntegrationTargetResource;
