import CommReferencedExtensionResource from "./CommReferencedExtensionResource.js";

/**
 * Ring target
 */
interface CommCoworkerForwardingTargetResource {
  /**
   * Required
   */
  extension?: CommReferencedExtensionResource;

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

  /** */
  name?: string;
}

export default CommCoworkerForwardingTargetResource;
