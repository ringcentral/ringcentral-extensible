import CommDeviceResource from "./CommDeviceResource.js";
import CommReferencedExtensionResource from "./CommReferencedExtensionResource.js";

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
    | "IntegrationRingTarget"
    | "PhoneNumberRingTarget";

  /**
   * Required
   */
  device?: CommDeviceResource;

  /**
   * Required
   */
  extension?: CommReferencedExtensionResource;
}

export default CommDeviceRingTargetResource;
