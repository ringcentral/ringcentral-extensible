import CommReferencedExtensionResource from "./CommReferencedExtensionResource.js";

/**
 * All Mobile Ring target
 */
interface CommAllMobileRingAlwaysRingTargetResource {
  /**
   * Required
   */
  name?: string;

  /**
   * Ring target type. Applicable for all desktop and mobile applications.
   *  Ensures applications ring all the time during a call
   * Required
   * Example: AllMobileRingTarget
   */
  type?: "AllDesktopRingTarget" | "AllMobileRingTarget";

  /**
   * Required
   */
  extension?: CommReferencedExtensionResource;
}

export default CommAllMobileRingAlwaysRingTargetResource;
