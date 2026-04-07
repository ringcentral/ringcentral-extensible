import type CommPhoneNumberResource from "./CommPhoneNumberResource.js";

interface CommImsPhoneNumberForwardingTargetResource {
  /**
   * Ring target type
   * Required
   * Example: ImsPhoneNumberRingTarget
   */
  type?:
    | "CoworkerAppsRingTarget"
    | "CoworkerRingTarget"
    | "DeviceRingTarget"
    | "ImsPhoneNumberRingTarget"
    | "FmcPhoneNumberRingTarget"
    | "IntegrationRingTarget"
    | "PhoneNumberRingTarget";

  /**
   * Required
   */
  destination?: CommPhoneNumberResource;
}

export default CommImsPhoneNumberForwardingTargetResource;
