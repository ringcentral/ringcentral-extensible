import CommReferencedExtensionResource from "./CommReferencedExtensionResource.js";

/**
 * Ring target
 */
interface CommCoworkerForwardingTargetRequest {
  /** */
  name?: string;

  /**
   * Ring target type
   * Required
   * Example: CoworkerRingTarget
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
  extension?: CommReferencedExtensionResource;
}

export default CommCoworkerForwardingTargetRequest;
