import type CommPhoneNumberResource from "./CommPhoneNumberResource.js";

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
    | "FmcPhoneNumberRingTarget"
    | "IntegrationRingTarget"
    | "PhoneNumberRingTarget"
    | "CloudConnectorRingTarget";

  /**
   * Required
   */
  destination?: CommPhoneNumberResource;

  /**
   */
  name?: string;
}

export default CommPhoneNumberRingTargetRequest;
