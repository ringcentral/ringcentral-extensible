interface CommRingAlwaysRingTargetResource {
  /** */
  name?: string;

  /**
   * Ring target type. Applicable for all desktop and mobile applications.
   *  Ensures applications ring all the time during a call
   * Required
   */
  type?: "AllDesktopRingTarget" | "AllMobileRingTarget";
}

export default CommRingAlwaysRingTargetResource;
