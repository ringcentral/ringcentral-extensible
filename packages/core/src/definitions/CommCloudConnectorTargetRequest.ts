import type CommCloudDestination from "./CommCloudDestination.js";

/**
 * Ring target
 */
interface CommCloudConnectorTargetRequest {
  /**
   * Required
   */
  destination?: CommCloudDestination;

  /**
   * Type of a ring target
   * Example: CloudConnectorRingTarget
   */
  type?: "CloudConnectorRingTarget";

  /**
   * Required
   * Example: Cloud Connector Contact
   */
  name?: string;
}

export default CommCloudConnectorTargetRequest;
