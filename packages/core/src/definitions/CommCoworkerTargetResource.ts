import CommReferencedExtensionResource from "./CommReferencedExtensionResource.js";

/**
 * Ring target
 */
interface CommCoworkerTargetResource {
  /**
   * Required
   */
  extension?: CommReferencedExtensionResource;

  /**
   * Type of a ring target
   * Example: CoworkerRingTarget
   */
  type?: "CoworkerRingTarget";
}

export default CommCoworkerTargetResource;
