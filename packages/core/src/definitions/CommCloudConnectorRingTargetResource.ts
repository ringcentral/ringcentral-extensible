import type CommCloudDestination from "./CommCloudDestination.js";

/**
 * Ring target
 */
interface CommCloudConnectorRingTargetResource {
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
    | "AllDesktopRingTarget"
    | "AllMobileRingTarget"
    | "CoworkerRingTarget"
    | "DeviceRingTarget"
    | "HotdeskRingTarget"
    | "ImsPhoneNumberRingTarget"
    | "FmcPhoneNumberRingTarget"
    | "IntegrationRingTarget"
    | "PhoneNumberRingTarget"
    | "CloudConnectorRingTarget";

  /**
   */
  name?: string;
}

export default CommCloudConnectorRingTargetResource;
