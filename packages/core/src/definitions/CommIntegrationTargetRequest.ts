import CommIntegrationRequest from "./CommIntegrationRequest.js";

interface CommIntegrationTargetRequest {
  /**
   * Required
   */
  integration?: CommIntegrationRequest;

  /**
   * Ring target type
   * Example: IntegrationRingTarget
   */
  type?: "IntegrationRingTarget";
}

export default CommIntegrationTargetRequest;
