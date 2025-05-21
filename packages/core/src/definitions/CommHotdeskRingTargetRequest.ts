interface CommHotdeskRingTargetRequest {
  /**
   * Ring target type
   * Required
   * Example: HotdeskRingTarget
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

export default CommHotdeskRingTargetRequest;
