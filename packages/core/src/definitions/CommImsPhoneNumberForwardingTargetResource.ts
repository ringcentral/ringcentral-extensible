import CommPhoneNumberResource from "./CommPhoneNumberResource.js";

interface CommImsPhoneNumberForwardingTargetResource {
  /** */
  name?: string;

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
    | "IntegrationRingTarget"
    | "PhoneNumberRingTarget";

  /**
   * Required
   */
  destination?: CommPhoneNumberResource;
}

export default CommImsPhoneNumberForwardingTargetResource;
