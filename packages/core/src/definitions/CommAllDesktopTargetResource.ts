import CommReferencedExtensionResource from "./CommReferencedExtensionResource.js";

/**
 * All Desktop Ring target
 */
interface CommAllDesktopTargetResource {
  /** */
  extension?: CommReferencedExtensionResource;

  /**
   * Required
   */
  name?: string;

  /**
   * Example: AllDesktopRingTarget
   */
  type?: "AllDesktopRingTarget";
}

export default CommAllDesktopTargetResource;
