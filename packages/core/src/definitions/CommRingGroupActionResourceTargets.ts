import type CommCloudDestination from "./CommCloudDestination.js";
import type CommDeviceResource from "./CommDeviceResource.js";
import type CommIntegrationResource from "./CommIntegrationResource.js";
import type CommReferencedExtensionResource from "./CommReferencedExtensionResource.js";

interface CommRingGroupActionResourceTargets {
  /**
   */
  name?: string;

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
  device?: CommDeviceResource;

  /**
   */
  destination?: CommCloudDestination;

  /**
   */
  integration?: CommIntegrationResource;
}

export default CommRingGroupActionResourceTargets;
