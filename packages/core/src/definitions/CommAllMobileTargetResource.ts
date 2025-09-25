import CommReferencedExtensionResource from "./CommReferencedExtensionResource.js";

/**
 * All Mobile Ring target
 */
interface CommAllMobileTargetResource {
  /** */
  extension?: CommReferencedExtensionResource;

  /**
   * Required
   */
  name?: string;

  /**
   * Example: AllMobileRingTarget
   */
  type?: "AllMobileRingTarget";
}

export default CommAllMobileTargetResource;
