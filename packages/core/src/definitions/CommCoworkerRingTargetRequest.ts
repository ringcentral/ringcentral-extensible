import CommReferencedExtensionResource from "./CommReferencedExtensionResource.js";

/**
 * Ring target
 */
interface CommCoworkerRingTargetRequest {
  /**
   * Ring target type
   * Required
   * Example: CoworkerRingTarget
   */
  type?:
    | "AllDesktopRingTarget"
    | "AllMobileRingTarget"
    | "CoworkerRingTarget"
    | "DeviceRingTarget"
    | "HotdeskRingTarget"
    | "ImsPhoneNumberRingTarget"
    | "IntegrationRingTarget"
    | "PhoneNumberRingTarget";

  /**
   * Required
   */
  extension?: CommReferencedExtensionResource;
}

export default CommCoworkerRingTargetRequest;
