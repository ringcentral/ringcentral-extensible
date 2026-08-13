import type CommCloudDestination from "./CommCloudDestination.js";

/**
 * Ring target
 */
interface CommCloudConnectorTargetResource {
  /**
   * Required
   */
  destination?: CommCloudDestination;

  /**
   * Type of a ring target
   * Example: CloudConnectorRingTarget
   */
  type?: "CloudConnectorRingTarget";
}

export default CommCloudConnectorTargetResource;
