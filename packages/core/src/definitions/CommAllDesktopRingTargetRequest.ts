import CommReferencedExtensionResource from "./CommReferencedExtensionResource.js";

/**
 * All Desktop Ring target
 */
interface CommAllDesktopRingTargetRequest {
  /**
   * Ring target type
   * Required
   * Example: AllDesktopRingTarget
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

  /** */
  extension?: CommReferencedExtensionResource;
}

export default CommAllDesktopRingTargetRequest;
