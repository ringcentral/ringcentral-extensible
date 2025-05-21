import CommReferencedExtensionResource from "./CommReferencedExtensionResource.js";

/**
 * All Desktop Ring target
 */
interface CommAllDesktopTargetRequest {
  /** */
  extension?: CommReferencedExtensionResource;

  /**
   * Example: AllDesktopRingTarget
   */
  type?: "AllDesktopRingTarget";
}

export default CommAllDesktopTargetRequest;
