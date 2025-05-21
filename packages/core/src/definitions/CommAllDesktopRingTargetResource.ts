import CommReferencedExtensionResource from "./CommReferencedExtensionResource.js";

/**
 * All Desktop Ring target
 */
interface CommAllDesktopRingTargetResource {
  /**
   * Required
   */
  name?: string;

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

  /**
   * Required
   */
  extension?: CommReferencedExtensionResource;
}

export default CommAllDesktopRingTargetResource;
