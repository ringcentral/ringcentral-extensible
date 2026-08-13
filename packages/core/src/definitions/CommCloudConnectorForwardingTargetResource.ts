import type CommCloudDestination from "./CommCloudDestination.js";

/**
 * Ring target
 */
interface CommCloudConnectorForwardingTargetResource {
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
    | "FmcPhoneNumberRingTarget"
    | "IntegrationRingTarget"
    | "PhoneNumberRingTarget"
    | "CloudConnectorRingTarget";
}

export default CommCloudConnectorForwardingTargetResource;
