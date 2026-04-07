import type CommPhoneNumberResource from "./CommPhoneNumberResource.js";

interface CommFmcPhoneNumberRingTargetRequest {
  /**
   * Ring target type
   * Required
   * Example: FmcPhoneNumberRingTarget
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
  destination?: CommPhoneNumberResource;
}

export default CommFmcPhoneNumberRingTargetRequest;
