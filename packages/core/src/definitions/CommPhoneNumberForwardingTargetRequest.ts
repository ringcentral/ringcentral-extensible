import CommPhoneNumberResource from "./CommPhoneNumberResource.js";

interface CommPhoneNumberForwardingTargetRequest {
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

export default CommPhoneNumberForwardingTargetRequest;
