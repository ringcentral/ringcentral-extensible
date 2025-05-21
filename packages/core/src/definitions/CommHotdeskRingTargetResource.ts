import CommDeviceResource from "./CommDeviceResource.js";

interface CommHotdeskRingTargetResource {
  /**
   * Required
   */
  name?: string;

  /**
   * Ring target type
   * Required
   * Example: HotdeskRingTarget
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
}

export default CommHotdeskRingTargetResource;
