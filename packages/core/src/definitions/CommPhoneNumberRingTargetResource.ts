import CommPhoneNumberResource from "./CommPhoneNumberResource.js";

interface CommPhoneNumberRingTargetResource {
  /** */
  name?: string;

  /**
   * Ring target type
   * Required
   * Example: PhoneNumberRingTarget
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
  destination?: CommPhoneNumberResource;
}

export default CommPhoneNumberRingTargetResource;
