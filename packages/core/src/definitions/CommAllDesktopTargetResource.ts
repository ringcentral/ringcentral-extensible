import CommReferencedExtensionResource from "./CommReferencedExtensionResource.js";

/**
 * All Desktop Ring target
 */
interface CommAllDesktopTargetResource {
  /**
   * Required
   */
  extension?: CommReferencedExtensionResource;

  /**
   * Example: AllDesktopRingTarget
   */
  type?: "AllDesktopRingTarget";
}

export default CommAllDesktopTargetResource;
