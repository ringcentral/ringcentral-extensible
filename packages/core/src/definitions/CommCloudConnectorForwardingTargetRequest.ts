import type CommCloudDestination from "./CommCloudDestination.js";

/**
 * Ring target
 */
interface CommCloudConnectorForwardingTargetRequest {
  /**
   * Required
   */
  destination?: CommCloudDestination;

  /**
   * Ring target type
   * Required
   * Example: CloudConnectorRingTarget
   */
  type?:
    | "CoworkerAppsRingTarget"
    | "CoworkerRingTarget"
    | "DeviceRingTarget"
    | "ImsPhoneNumberRingTarget"
    | "IntegrationRingTarget"
    | "PhoneNumberRingTarget"
    | "CloudConnectorRingTarget";

  /**
   */
  name?: string;
}

export default CommCloudConnectorForwardingTargetRequest;
