import CommReferencedExtensionResource from "./CommReferencedExtensionResource.js";

/**
 * All Mobile Ring target
 */
interface CommAllMobileTargetResource {
  /**
   * Required
   */
  extension?: CommReferencedExtensionResource;

  /**
   * Example: AllMobileRingTarget
   */
  type?: "AllMobileRingTarget";
}

export default CommAllMobileTargetResource;
