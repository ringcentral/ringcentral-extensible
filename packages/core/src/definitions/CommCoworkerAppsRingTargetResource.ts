import CommReferencedExtensionResource from "./CommReferencedExtensionResource.js";

/**
 * Coworker apps target
 */
interface CommCoworkerAppsRingTargetResource {
  /** */
  name?: string;

  /**
   * Ring target type
   * Required
   * Example: CoworkerAppsRingTarget
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

export default CommCoworkerAppsRingTargetResource;
