import type CommDeviceResource from "./CommDeviceResource.js";
import type CommReferencedExtensionResource from "./CommReferencedExtensionResource.js";

interface CommDeviceRingTargetResource {
  /**
   * Required
   */
  name?: string;

  /**
   * Ring target type
   * Required
   * Example: DeviceRingTarget
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
    | "PhoneNumberRingTarget";

  /**
   * Required
   */
  device?: CommDeviceResource;

  /**
   */
  extension?: CommReferencedExtensionResource;
}

export default CommDeviceRingTargetResource;
