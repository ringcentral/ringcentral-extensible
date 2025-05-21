import CommPhoneNumberResource from "./CommPhoneNumberResource.js";

interface CommPhoneNumberRingTargetRequest {
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

  /** */
  name?: string;
}

export default CommPhoneNumberRingTargetRequest;
