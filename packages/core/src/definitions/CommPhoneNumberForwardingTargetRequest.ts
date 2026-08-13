import type CommPhoneNumberResource from "./CommPhoneNumberResource.js";

interface CommPhoneNumberForwardingTargetRequest {
  /**
   */
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
    | "PhoneNumberRingTarget"
    | "CloudConnectorRingTarget";

  /**
   * Required
   */
  destination?: CommPhoneNumberResource;
}

export default CommPhoneNumberForwardingTargetRequest;
