import type CommCloudDestination from "./CommCloudDestination.js";
import type CommDeviceRequest from "./CommDeviceRequest.js";
import type CommIntegrationRequest from "./CommIntegrationRequest.js";
import type CommReferencedExtensionResource from "./CommReferencedExtensionResource.js";

interface CommRingGroupActionRequestTargets {
  /**
   * Ring target type
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
  extension?: CommReferencedExtensionResource;

  /**
   */
  device?: CommDeviceRequest;

  /**
   */
  destination?: CommCloudDestination;

  /**
   */
  integration?: CommIntegrationRequest;

  /**
   * Example: Cloud Connector Contact
   */
  name?: string;
}

export default CommRingGroupActionRequestTargets;
