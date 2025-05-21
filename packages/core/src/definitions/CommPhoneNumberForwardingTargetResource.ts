import CommPhoneNumberResource from "./CommPhoneNumberResource.js";

interface CommPhoneNumberForwardingTargetResource {
  /** */
  name?: string;

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
    | "IntegrationRingTarget"
    | "PhoneNumberRingTarget";

  /**
   * Required
   */
  destination?: CommPhoneNumberResource;
}

export default CommPhoneNumberForwardingTargetResource;
