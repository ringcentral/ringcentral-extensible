import CommReferencedExtensionResource from "./CommReferencedExtensionResource.js";

/**
 * All Mobile Ring target
 */
interface CommAllMobileTargetRequest {
  /** */
  extension?: CommReferencedExtensionResource;

  /**
   * Example: AllMobileRingTarget
   */
  type?: "AllMobileRingTarget";
}

export default CommAllMobileTargetRequest;
