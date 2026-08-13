import type CommPhoneNumberResource from "./CommPhoneNumberResource.js";

interface CommPhoneNumberForwardingTargetResource {
  /**
   * Ring target type
   * Required
   * Example: PhoneNumberRingTarget
   */
  type?:
    | "CoworkerAppsRingTarget"
    | "CoworkerRingTarget"
    | "DeviceRingTarget"
    | "ImsPhoneNumberRingTarget"
    | "FmcPhoneNumberRingTarget"
    | "IntegrationRingTarget"
    | "PhoneNumberRingTarget"
    | "CloudConnectorRingTarget";

  /**
   * Required
   */
  destination?: CommPhoneNumberResource;
}

export default CommPhoneNumberForwardingTargetResource;
