interface CommRingTargetResource {
  /** */
  name?: string;

  /**
   * Ring target type
   * Required
   */
  type?:
    | "AllDesktopRingTarget"
    | "AllMobileRingTarget"
    | "CoworkerRingTarget"
    | "DeviceRingTarget"
    | "HotdeskRingTarget"
    | "ImsPhoneNumberRingTarget"
    | "IntegrationRingTarget"
    | "PhoneNumberRingTarget";
}

export default CommRingTargetResource;
