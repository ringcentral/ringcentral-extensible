import CommReferencedExtensionResource from "./CommReferencedExtensionResource.js";

/**
 * All Mobile Ring target
 */
interface CommAllMobileRingTargetRequest {
  /**
   * Ring target type
   * Required
   * Example: AllMobileRingTarget
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

export default CommAllMobileRingTargetRequest;
