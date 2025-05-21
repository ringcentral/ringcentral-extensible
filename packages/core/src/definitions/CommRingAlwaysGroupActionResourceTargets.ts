import CommReferencedExtensionResource from "./CommReferencedExtensionResource.js";

interface CommRingAlwaysGroupActionResourceTargets {
  /** */
  name?: string;

  /**
   * Ring target type. Applicable for all desktop and mobile applications.
   *  Ensures applications ring all the time during a call
   * Example: AllMobileRingTarget
   */
  type?: "AllDesktopRingTarget" | "AllMobileRingTarget";

  /** */
  extension?: CommReferencedExtensionResource;
}

export default CommRingAlwaysGroupActionResourceTargets;
