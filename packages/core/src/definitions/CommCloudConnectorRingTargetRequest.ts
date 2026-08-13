import type CommCloudDestination from "./CommCloudDestination.js";

/**
 * Ring target
 */
interface CommCloudConnectorRingTargetRequest {
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
   * Required
   */
  destination?: CommCloudDestination;

  /**
   * Required
   * Example: Cloud Connector Contact
   */
  name?: string;
}

export default CommCloudConnectorRingTargetRequest;
