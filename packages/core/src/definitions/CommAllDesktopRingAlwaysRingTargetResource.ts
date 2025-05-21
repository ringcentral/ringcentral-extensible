import CommReferencedExtensionResource from "./CommReferencedExtensionResource.js";

/**
 * All Desktop Ring target
 */
interface CommAllDesktopRingAlwaysRingTargetResource {
  /**
   * Required
   */
  name?: string;

  /**
   * Ring target type. Applicable for all desktop and mobile applications.
   *  Ensures applications ring all the time during a call
   * Required
   * Example: AllDesktopRingTarget
   */
  type?: "AllDesktopRingTarget" | "AllMobileRingTarget";

  /**
   * Required
   */
  extension?: CommReferencedExtensionResource;
}

export default CommAllDesktopRingAlwaysRingTargetResource;
